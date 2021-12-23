export const ParseHashtags = (text) => {
  try {
    const regularHashtag = /#[\dA-Za-z\u0080-\uFFFF]+/g;
    const regularUsername = /(^@|\s@)[\wА-я]+/g;
    // let host = "http://localhost:3000/";
    let string;
    string = text.replace(
      regularHashtag,
      (string_) =>
        // href="' + host + '/search?q=' + text.slice(1) + '"
        `<a class="tag" >${string_}</a>`
    );
    string = string.replace(
      regularUsername,
      (string_) => `<a onclick="window.location=\`${string_}\`" class="tag" >${string_}</a>`
    );
    return string;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Error parse hashtags: ${error}`);
    return text;
  }
};
