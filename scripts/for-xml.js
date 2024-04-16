function displayАrticle(tagName) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'description.xml', true);
  xhr.setRequestHeader('Content-Type', 'application/xml');
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let xmlContent = xhr.responseXML;
      let elements = xmlContent.getElementsByTagName(tagName);

      if (elements.length > 0) {
        let title = elements[0].getElementsByTagName('title')[0].textContent;
        let content = elements[0].getElementsByTagName('content')[0].textContent;

        let titleElement = document.createElement('h1');
        titleElement.textContent = title;

        let contentElement = document.createElement('p');
        contentElement.textContent = content;

        let articleElement = document.getElementById('article');
        articleElement.innerHTML = '';
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
      }
    }
  };
}

displayАrticle('articles');