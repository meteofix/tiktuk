import React from 'react';

export const ParseHashtags = (text) => {
    function parse (str) {
        try {
            let regular_hastag = /#[0-9A-Za-zА-Яа-яё\u0080-\uFFFF]+/g;
            let regular_username = /(^@|[\s]@)[\w\dА-я]+/g;
            let host = "http://localhost:3000/";
            let string = '';
            string = str.replace(regular_hastag, function replacer(str) {
                // href="' + host + '/search?q=' + str.slice(1) + '"
                return '<a class="tag" >' + str + '</a>'
            });
            string = string.replace(regular_username, function replacer(str) {
                return '<a onclick="window.location=`' + str + '`" class="tag" >' + str + '</a>'
            });
            return string;
        } catch (e) {
            console.log('Error parse hashtags')
            return str;
        }
    }
    return parse(text);
};
