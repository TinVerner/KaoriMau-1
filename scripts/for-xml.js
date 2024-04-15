// Загрузка XML-файла
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    parseXML(this);
  }
};
xmlhttp.open("GET", "description.xml", true);
xmlhttp.send();

// Обработка XML
function parseXML(xml) {
  var xmlDoc = xml.responseXML;
  var articles = xmlDoc.getElementsByTagName("article");
  var articlesDiv = document.getElementById("articles");

  // Создание элементов на основе данных XML
  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var title = article.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var content = article.getElementsByTagName("content")[0].childNodes[0].nodeValue;
    var author = article.getElementsByTagName("author")[0].childNodes[0].nodeValue;

    var articleDiv = document.createElement("div");
    articleDiv.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p><p>Автор: " + author + "</p>";
    articleDiv.classList.add("visible"); // Добавление класса .visible
    articlesDiv.appendChild(articleDiv);
  }
}
function redirectToIndex() {
  window.location.href = "index.html";
}