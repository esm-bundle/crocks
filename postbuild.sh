rename 's/js_commonjs-proxy/js/g' ./_virtual/*
grep -rli  'js_commonjs-proxy' . | xargs -I@ sed -i 's/\js_commonjs-proxy/js/g' @
