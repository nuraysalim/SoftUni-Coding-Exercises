function extractFile(string) {
  let extracted = string.split("\\");
  let file = extracted.pop().split(".");
  let extension = file.pop();

  console.log(`File name: ${file.join(".")}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
