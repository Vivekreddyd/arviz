(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("4de033f5-1563-4ea7-ab84-6a0beaf0eee8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4de033f5-1563-4ea7-ab84-6a0beaf0eee8' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"7aed862f-a1c7-4b4e-916d-38d45f2da096":{"roots":{"references":[{"attributes":{},"id":"73436","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"73439","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"73427"},"dimension":1,"ticker":null},"id":"73430","type":"Grid"},{"attributes":{"source":{"id":"73455"}},"id":"73459","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"73451","type":"Patch"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"73457","type":"Line"},{"attributes":{},"id":"73437","type":"SaveTool"},{"attributes":{"formatter":{"id":"73465"},"ticker":{"id":"73424"}},"id":"73423","type":"LinearAxis"},{"attributes":{"overlay":{"id":"73440"}},"id":"73435","type":"LassoSelectTool"},{"attributes":{"text":""},"id":"73460","type":"Title"},{"attributes":{"source":{"id":"73450"}},"id":"73454","type":"CDSView"},{"attributes":{},"id":"73421","type":"LinearScale"},{"attributes":{},"id":"73463","type":"BasicTickFormatter"},{"attributes":{},"id":"73432","type":"PanTool"},{"attributes":{},"id":"73466","type":"Selection"},{"attributes":{},"id":"73424","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"73440","type":"PolyAnnotation"},{"attributes":{},"id":"73428","type":"BasicTicker"},{"attributes":{},"id":"73467","type":"UnionRenderers"},{"attributes":{},"id":"73417","type":"DataRange1d"},{"attributes":{"callback":null},"id":"73438","type":"HoverTool"},{"attributes":{},"id":"73465","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"73452","type":"Patch"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"73431"},{"id":"73432"},{"id":"73433"},{"id":"73434"},{"id":"73435"},{"id":"73436"},{"id":"73437"},{"id":"73438"}]},"id":"73441","type":"Toolbar"},{"attributes":{"axis":{"id":"73423"},"ticker":null},"id":"73426","type":"Grid"},{"attributes":{},"id":"73434","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"73439"}},"id":"73433","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"73455"},"glyph":{"id":"73456"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73457"},"selection_glyph":null,"view":{"id":"73459"}},"id":"73458","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"73450"},"glyph":{"id":"73451"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73452"},"selection_glyph":null,"view":{"id":"73454"}},"id":"73453","type":"GlyphRenderer"},{"attributes":{},"id":"73431","type":"ResetTool"},{"attributes":{},"id":"73415","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"73466"},"selection_policy":{"id":"73467"}},"id":"73450","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"73423"}],"center":[{"id":"73426"},{"id":"73430"}],"left":[{"id":"73427"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"73453"},{"id":"73458"}],"title":{"id":"73460"},"toolbar":{"id":"73441"},"toolbar_location":"above","x_range":{"id":"73415"},"x_scale":{"id":"73419"},"y_range":{"id":"73417"},"y_scale":{"id":"73421"}},"id":"73414","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"73468","type":"Selection"},{"attributes":{},"id":"73469","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"ChBaYJwCBcDyRIr4HkwDwMmN0asHO/+/AI3nHCuQ/L/9Szt6lIn3vyrWzsPNw/W/0/jQBSqp9L9r9hoDiLPzv2bZhkaU0PK/yFdbZSUV8r/20fnABgLyv3C4J80NCPG/i5I0Z9KO8L+aK1FhAnzwv5bA2Afq2O+/Piqi60vg7r+aVw7Zb8juv4N9ppcRIuu/jGjEyGIN67/fNn0DtZfqv2YaFzK8vOi/r2VHNRWR57+nIcXRsLjmv/qfBHjyj+a/ySmfEvKs5b/2ZZHl6UPlvw5d0G1G7+S/p3Da2Pzh47+ewurZ8q7iv+2Idi6tgOK/Ax9nUNoy4r+z7ppK/irgvxUgy+Jwqd+/8G8TAJiQ378qodr8ipDdv1H2PgrwO92/K5J33Tdt2L9cOsUO0JjWv5iybUZne9a/us6oHJBB07+fKP6DscPQvze4jSvTxs+/KySj4I5cz7/Z4MS//lrPv2GFkOEVPM2/T41KmOyUzL/Yd0wNMPjLv7npTe0PkMi/snqoeIIvxr+urAkBNqXDv8sKKi9dIcK/sRPQ085dwb/dPE1v43+9v08U5C7GE7a/iB70KOCqo7/fHNHM2ZluPwko1CRkcK4/pP68dE8IwT9rHW2poH3BP1oyxsE4EMI/Q1b921jJwj/IRhwmHXjDP0pXuwxyAs0/X2mkL1u01j+lqRnB4ezWP8xrQXO3NNc/feMRb08b2D98hdJxAYjaPxZAgDGO+dw/ZusVsl2V3j+IwBsia5XeP+VgeVL8Hd8/ZNC7OYJ74T+0Ij+AwonhPyyKpCR/iuE/aZpMUm+k4T/QRZP/LVjiP9Mc4aamnuI/fbldLHXb4z/GpeJNk+/kP+RdVj9MqOU/gN87fAsl6D8qziilHC7oPyHtCXf/Tek/a9cbZT1q6T8B38cEpzbqP3MydTU+6PA/ppQLdXsa9T/TUv8x80P1P3wXE1ezjfU/fBT+sU6n9T/kwTS7DLb1P0lDomtWlPY/cEuiLSYS9z809xOFEXz3PxnOH/vxNfk/dz+7kM6R+j/cN1jvsxr8P1e7DWxLKQNA4d7yZ9+MBEA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"7N9LP8f65T8cdusOwmfpPxw5Fyp8YvA/gDmMceq38T8CWuLCNTv0P+uUGB4ZHvU/loMX/Wqr9T/KhHL+Oyb2P02TvNy1l/Y/HFRSTW319j8FF4Of/P72P8gjbBn5e/c/urZlzJa49z8zalfP/sH3P9rPCX7FCfg/cHUXBe1H+D8aarwJ5E34P59gFpp7N/k/3eXOTac8+T9IsiC/Elr5P2Y5evPQ0Pk/lCausrob+j+Wt47L01H6PwLY/mEDXPo/jjVYe8OU+j+CppuGBa/6P7zoi2QuxPo/1mPJyYAH+z9YT4VJQ1T7P8VdYrTUX/s/Pzjma0lz+z9TRFltQPX7P/2bpuPRCvw/ApL9/+wN/D/bq2Sg7k38PzYhuP6BWPw/uw1RBFny/D+0WCf+5Sz9P61JMheTMP0/KeZq/M2X/T/sOoDPief9P30kR82SA/4/vc31ETcK/j/ysQMUUAr+P6r35qE+LP4/K1d7NrE2/j+COCv/fED+P2QhKwH/dv4/VXh12Aed/j81Ze+frMX+P1NfDS3q3f4/xf7CEiPq/j8ZloXkABT/P17fiM5hT/8/hi9cf1Sx/z8kmjk70wMAQFCoScjgPABA9eele0KIAEDraEsF7YsAQJMxDsaBkABAsurfxkqWAEA24jDpwJsAQLraZZAT6ABAlkb6skVrAUCamhEczm4BQL0WNHdLcwFAOB7x9rSBAUBYKB0XgKgBQAEEGOOYzwFAtl4h21XpAUAIvCGyVukBQA6WJ8Xf8QFADHo3R3AvAkBW5AdQODECQEaRlORPMQJATZNJ6o00AkC6aPK/BUsCQJoj3NTUUwJAMLeLpW57AkC5VLxp8p0CQLzL6ocJtQJA8HuHb6EEA0DFGaWUwwUDQKQ94e6/KQNA7XqjrEctA0Dg+5jg1EYDQJ1MXY0POgRAKuVC3Z5GBUC11H/M/FAFQN/FxNVsYwVAH4V/rNNpBUB5MM0ug20FQNKQ6JoVpQVA3JJoi4nEBUDN/URhBN8FQIbzx358TQZA3s8upHOkBkD3Ddb7rAYHQKzdBrallAlAcG/5s29GCkA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"73468"},"selection_policy":{"id":"73469"}},"id":"73455","type":"ColumnDataSource"},{"attributes":{},"id":"73419","type":"LinearScale"},{"attributes":{"formatter":{"id":"73463"},"ticker":{"id":"73428"}},"id":"73427","type":"LinearAxis"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"73456","type":"Line"}],"root_ids":["73414"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"7aed862f-a1c7-4b4e-916d-38d45f2da096","root_ids":["73414"],"roots":{"73414":"4de033f5-1563-4ea7-ab84-6a0beaf0eee8"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();