rename 's/js_commonjs-proxy/js/g' esm/**/*
grep -rli  'js_commonjs-proxy' esm | xargs -I@ sed -i 's/\js_commonjs-proxy/js/g' @
