"use strict";
exports.id = 661;
exports.ids = [661];
exports.modules = {

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hC": () => (/* binding */ getAllPostsPath),
/* harmony export */   "Qk": () => (/* binding */ getPostsMetaData),
/* harmony export */   "AU": () => (/* binding */ getPostData)
/* harmony export */ });
const fs = __webpack_require__(147);
const path = __webpack_require__(17);
const matter = __webpack_require__(76);
// current 'posts' directory
const postsDirectory = path.join(process.cwd(), 'posts');
const mdx_file_extention = '.mdx';
function getAllFilesInDirectory() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName)=>{
        return path.parse(fileName);
    });
}
function getMdxFiles() {
    const allFiles = getAllFilesInDirectory();
    return allFiles.filter((parsedFile)=>parsedFile.ext == mdx_file_extention
    );
}
function getAllPostsPath() {
    const allMdxFiles = getMdxFiles();
    return allMdxFiles.map((parsedFile)=>{
        return {
            params: {
                id: parsedFile.name
            }
        };
    });
}
function getPostsMetaData() {
    const allMdxFiles = getMdxFiles();
    const postsMetaData = allMdxFiles.map((parsedFile)=>{
        const fullPath = path.join(postsDirectory, parsedFile.base);
        // get MDX metadata and content
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // get metadata, content
        const { data , content  } = matter(fileContents);
        let metadata = data;
        metadata['id'] = parsedFile.name;
        return metadata;
    });
    return postsMetaData;
}
function getPostData(id) {
    const fullPath = path.join(postsDirectory, id + mdx_file_extention);
    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // get metadata, content
    const { data , content  } = matter(fileContents);
    let metadata = data;
    metadata['id'] = id;
    return {
        metadata: metadata,
        content: content
    };
}


/***/ })

};
;