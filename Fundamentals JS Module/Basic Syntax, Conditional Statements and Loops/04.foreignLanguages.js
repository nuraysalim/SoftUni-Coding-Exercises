function foreignLang(language) {
    if (language === 'England' || language === 'USA') {
        console.log('English'); 
    } else if (language === 'Spain' || language === 'Argentina' || language === "Mexico") {
        console.group('Spanish');
    } else {
        console.log('unknown');
    }
}

foreignLang('USA');
foreignLang('Germany')