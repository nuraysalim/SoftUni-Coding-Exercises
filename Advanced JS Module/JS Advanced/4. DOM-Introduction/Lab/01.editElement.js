function edit(ref, match, replacer) {
const content = ref.textContent;
const matcher = RegExp(match, 'g');
const edited = content.replace(matcher, replacer);
ref.textContent = edited;
}

edit(test.html, %[A-Za-z ]+%)