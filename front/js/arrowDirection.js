function scrollToElement(target) {
  const targets = target.dataset.target.split(' '); // Divide los elementos en un arreglo

  targets.forEach(targetId => { // Itera sobre cada elemento
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
}
