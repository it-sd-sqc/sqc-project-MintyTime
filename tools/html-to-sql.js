/***********************************************************
NOTE: If Git reports a fatal error saying either "LF will be
replaced by CRLF" or "CRLF would be replaced by LF", then
the line endings in the specified file (such as
"data/book.html") don't match your local Git repository.
You'll need to change the line endings in the specified file
to CRLF (carriage-return \r, line feed \n) or LF (line feed,
\n) in your text editor and resave the file.

This happens because Windows uses CRLF and macOS/Linux use
LF to indicate the end of the file, and Git doesn't want to
accidentally corrupt a binary file mislabelled as a text
file.
***********************************************************/
// flip through chapters extracting chapter title and page id (page number) //
// Dependencies ////////////////////////////////////////////
// import { strict as assert } from 'node:assert'
import { openSync, readFileSync, writeFileSync } // closeSync,
  from 'node:fs'
import { parse } from 'node-html-parser'

// Configuration ///////////////////////////////////////////
const srcPath = 'data/LadyMaclairn.html'
const dstPath = 'docs/generated-schema.sql'

// CASCADE option acknowledges foriegn key restraint and drops table anyways
const sqlHeader =
 `DROP TABLE IF EXISTS chapter CASCADE;
 DROP TABLE IF EXISTS pageNumber;

CREATE TABLE chapter (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE pageNumber (
  id SERIAL PRIMARY KEY,
  page_id INT NOT NULL, 
  title TEXT NOT NULL,
  number INT NOT NULL,
  FOREIGN KEY (page_id) REFERENCES chapter(id)
);


INSERT INTO chapter (title) VALUES
`

// Separate SQL statement to allow chapter table insert values to populate in the correct spot
// const sqlInsertPageNumber = 'INSERT INTO pageNumber (page_id, title, number) VALUES'

// Utility functions ///////////////////////////////////////
// extract chapter title //
function extractChapterTitle (chapterElement) {
  const titleElement = chapterElement.querySelector('h2.c005')
  if (titleElement) {
    return titleElement.text.trim()
  }
  return ''
}
// extract page_id //
function extractPageId (chapterElement) {
  const pageNumberElement = chapterElement.querySelector('span.pageno')
  if (pageNumberElement) {
    return pageNumberElement.id
  }
  return ''
}

// Conversion //////////////////////////////////////////////
const src = readFileSync(srcPath, 'utf8')
const domRoot = parse(src)

// Extract guide chapters.
const chapters = []
const chapterElements = domRoot.querySelectorAll('.chapter')

chapterElements.forEach(
  (chapterElement) => {
    // Extract the title
    const title = extractChapterTitle(chapterElement)
    const pageId = extractPageId(chapterElement)
    chapters.push({
      title,
      page_id: pageId
    })
  }
)

// Output the data as SQL.
const fd = openSync(dstPath, 'w')
writeFileSync(fd, sqlHeader)
chapters.forEach((chapter, index) => {
  const value = `('${chapter.title.replace(/'/g, "''")}' )`
  writeFileSync(fd, value)
  if (index < chapters.length - 1) {
    writeFileSync(fd, ',\n')
  }
})
writeFileSync(fd, ';\n\n')

// TODO: insert data into pageNumber table
//  writeFileSync(fd, sqlInsertPageNumber)

// Chapter's SQL ID should match with the order they were inserted starting at 1
// There still seems to be an issue with both the chapter extraction and the pagenumber stuff. Depends on how you want to implement the page number into your site.
// If you want to use the page number, I'd suggest .split('_')[1] to isolate the number from 'Page_'
// I included this console.log statement to show what I mean!
console.log(chapters)
