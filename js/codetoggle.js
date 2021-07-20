(function () { 
  function supports_html5_storage() {
          try {
            return 'localStorage' in window && window['localStorage'] !== null;
          } catch (e) {
            return false;
          }
        }
        function initial_state() {
            if(supports_html5_storage()) {
                return (localStorage['light'] === 'true');
            }
            return true;
        }
        function toggle_state() {
            if(supports_html5_storage()) {
                return localStorage['light'] = (localStorage['light'] !== 'true');
            }
            return window.light = !window.light;
        }
        function selectStyle(light) {
            var links = top.document.getElementsByTagName('link');
            var linkcount = links.length;
            for ( var i = 0; i < linkcount; i++) {
                if (links[i].title == 'dark-code') {
                    links[i].disabled = !light;
                }
                if (links[i].title == 'light-code') {
                    links[i].disabled = light;
                }
            }
        }
        
        function toggle_code_style() {
            var isLight = toggle_state();
            selectStyle(isLight);
        }
        selectStyle(initial_state());
        var pre = top.document.getElementsByTagName('pre');
        var preCount = pre.length;
        for ( var i = 0; i < preCount; i++) {
            if(pre[i].getElementsByTagName('code').length == 1) {
                var button = document.createElement('a');
                button.classList.add('code-theme-toggle');
                button.title = "toggle the dark|light code themes";
                button.onclick = toggle_code_style;
                pre[i].appendChild(button);
            }
        }
})();