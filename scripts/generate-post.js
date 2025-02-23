const fs = require('fs');
const path = require('path');
const moment = require('moment');

const title = process.argv[2] || 'Untitled';
const date = moment();
const year = date.year();
const month = date.format('MM');
const day = date.format('DD');

let formattedTitle = title;
if (title === 'G') {
    formattedTitle = `G🛹${year}年${month}月${day}日`;
} else if (title === 'J') {
    formattedTitle = `J🕊️${year}年${month}月${day}日`;
}

const postContent = `---
title: ${formattedTitle}
date: ${date.format('YYYY-MM-DD HH:mm:ss')}
tags: 
---
`;

const postFileName = `${formattedTitle}.md`;
const postFilePath = path.join(__dirname, '../source/_posts', postFileName);

fs.writeFileSync(postFilePath, postContent, 'utf8');
console.log('New post generated:', postFilePath);