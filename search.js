function search () {
    let keyWord = document.querySelector("searching").value;
    let words = ["car", "bus", "sun", "moon"];
    if (words.includes(keyWord)) {
        document.write(words);
    }
    else {
        document.write("not found")
    }
}