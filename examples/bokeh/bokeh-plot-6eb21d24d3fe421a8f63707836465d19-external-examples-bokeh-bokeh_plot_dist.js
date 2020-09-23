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
    
      
      
    
      var element = document.getElementById("89e7d7da-f96f-421e-976c-a8a9a07c1c0e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '89e7d7da-f96f-421e-976c-a8a9a07c1c0e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c88228cb-858f-4ce9-93ca-57250694564d":{"roots":{"references":[{"attributes":{"text":""},"id":"71972","type":"Title"},{"attributes":{},"id":"71896","type":"BasicTicker"},{"attributes":{},"id":"71935","type":"WheelZoomTool"},{"attributes":{},"id":"71922","type":"LinearScale"},{"attributes":{"axis":{"id":"71930"},"dimension":1,"ticker":null},"id":"71933","type":"Grid"},{"attributes":{},"id":"71934","type":"PanTool"},{"attributes":{},"id":"71893","type":"LinearScale"},{"attributes":{"formatter":{"id":"71981"},"ticker":{"id":"71927"}},"id":"71926","type":"LinearAxis"},{"attributes":{},"id":"71958","type":"BasicTickFormatter"},{"attributes":{},"id":"71908","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71966","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71940","type":"BoxAnnotation"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"71951"}]},"id":"71963","type":"LegendItem"},{"attributes":{},"id":"71986","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71934"},{"id":"71935"},{"id":"71936"},{"id":"71937"},{"id":"71938"},{"id":"71939"}]},"id":"71941","type":"Toolbar"},{"attributes":{"axis":{"id":"71895"},"ticker":null},"id":"71898","type":"Grid"},{"attributes":{"items":[{"id":"71963"}]},"id":"71962","type":"Legend"},{"attributes":{},"id":"71960","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71903"},{"id":"71904"},{"id":"71905"},{"id":"71906"},{"id":"71907"},{"id":"71908"}]},"id":"71910","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71909","type":"BoxAnnotation"},{"attributes":{},"id":"71891","type":"LinearScale"},{"attributes":{"below":[{"id":"71926"}],"center":[{"id":"71929"},{"id":"71933"}],"left":[{"id":"71930"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71967"}],"title":{"id":"71972"},"toolbar":{"id":"71941"},"x_range":{"id":"71918"},"x_scale":{"id":"71922"},"y_range":{"id":"71920"},"y_scale":{"id":"71924"}},"id":"71917","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71979","type":"BasicTickFormatter"},{"attributes":{},"id":"71903","type":"PanTool"},{"attributes":{},"id":"71927","type":"BasicTicker"},{"attributes":{},"id":"71939","type":"HelpTool"},{"attributes":{"data_source":{"id":"71948"},"glyph":{"id":"71949"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71950"},"selection_glyph":null,"view":{"id":"71952"}},"id":"71951","type":"GlyphRenderer"},{"attributes":{},"id":"71956","type":"BasicTickFormatter"},{"attributes":{},"id":"71981","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"71953","type":"Title"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71965","type":"Line"},{"attributes":{"overlay":{"id":"71940"}},"id":"71936","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"71926"},"ticker":null},"id":"71929","type":"Grid"},{"attributes":{},"id":"71938","type":"ResetTool"},{"attributes":{},"id":"71959","type":"Selection"},{"attributes":{},"id":"71985","type":"Selection"},{"attributes":{"formatter":{"id":"71956"},"ticker":{"id":"71900"}},"id":"71899","type":"LinearAxis"},{"attributes":{},"id":"71889","type":"DataRange1d"},{"attributes":{"formatter":{"id":"71958"},"ticker":{"id":"71896"}},"id":"71895","type":"LinearAxis"},{"attributes":{"source":{"id":"71964"}},"id":"71968","type":"CDSView"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71950","type":"Quad"},{"attributes":{"below":[{"id":"71895"}],"center":[{"id":"71898"},{"id":"71902"},{"id":"71962"}],"left":[{"id":"71899"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71951"}],"title":{"id":"71953"},"toolbar":{"id":"71910"},"x_range":{"id":"71887"},"x_scale":{"id":"71891"},"y_range":{"id":"71889"},"y_scale":{"id":"71893"}},"id":"71886","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71924","type":"LinearScale"},{"attributes":{"data_source":{"id":"71964"},"glyph":{"id":"71965"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71966"},"selection_glyph":null,"view":{"id":"71968"}},"id":"71967","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71949","type":"Quad"},{"attributes":{"source":{"id":"71948"}},"id":"71952","type":"CDSView"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"uB6F61G4jj8730+Nl26yP0jhehSuR8E/TmIQWDm0yD+JQWDl0CLLP3e+nxov3cQ/iUFg5dAiuz+kcD0K16OwP5qZmZmZmZk/O99PjZdugj/6fmq8dJNoP/yp8dJNYlA//Knx0k1iUD8=","dtype":"float64","order":"little","shape":[13]}},"selected":{"id":"71959"},"selection_policy":{"id":"71960"}},"id":"71948","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"71979"},"ticker":{"id":"71931"}},"id":"71930","type":"LinearAxis"},{"attributes":{},"id":"71907","type":"ResetTool"},{"attributes":{"children":[{"id":"71886"},{"id":"71917"}]},"id":"71969","type":"Row"},{"attributes":{},"id":"71904","type":"WheelZoomTool"},{"attributes":{},"id":"71906","type":"SaveTool"},{"attributes":{},"id":"71937","type":"SaveTool"},{"attributes":{},"id":"71887","type":"DataRange1d"},{"attributes":{"axis":{"id":"71899"},"dimension":1,"ticker":null},"id":"71902","type":"Grid"},{"attributes":{"overlay":{"id":"71909"}},"id":"71905","type":"BoxZoomTool"},{"attributes":{},"id":"71918","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"71985"},"selection_policy":{"id":"71986"}},"id":"71964","type":"ColumnDataSource"},{"attributes":{},"id":"71920","type":"DataRange1d"},{"attributes":{},"id":"71900","type":"BasicTicker"},{"attributes":{},"id":"71931","type":"BasicTicker"}],"root_ids":["71969"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"c88228cb-858f-4ce9-93ca-57250694564d","root_ids":["71969"],"roots":{"71969":"89e7d7da-f96f-421e-976c-a8a9a07c1c0e"}}];
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