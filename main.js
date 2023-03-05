function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    function info() {
        return `${title} by ${author}, ${pages} pages, ${
            isRead ? "read" : "not read yet"
        }`;
    }
}
