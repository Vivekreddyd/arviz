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
    
      
      
    
      var element = document.getElementById("ead78fc3-8346-4188-9f37-a62b0715fb4b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ead78fc3-8346-4188-9f37-a62b0715fb4b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"111533c7-fdfc-484d-b909-f1d7e3bed290":{"roots":{"references":[{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"104973"},"selection_policy":{"id":"104974"}},"id":"104963","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"104935"},"ticker":null},"id":"104938","type":"Grid"},{"attributes":{},"id":"104970","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"104980"},{"id":"104978"}]},"id":"104981","type":"Column"},{"attributes":{"text":"centered model - non centered model"},"id":"104966","type":"Title"},{"attributes":{},"id":"104936","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"104979"},"toolbar_location":"above"},"id":"104980","type":"ToolbarBox"},{"attributes":{},"id":"104973","type":"Selection"},{"attributes":{"axis":{"id":"104939"},"dimension":1,"ticker":null},"id":"104942","type":"Grid"},{"attributes":{},"id":"104931","type":"LinearScale"},{"attributes":{"data_source":{"id":"104963"},"glyph":{"id":"104962"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"104965"}},"id":"104964","type":"GlyphRenderer"},{"attributes":{},"id":"104946","type":"WheelZoomTool"},{"attributes":{},"id":"104933","type":"LinearScale"},{"attributes":{},"id":"104929","type":"DataRange1d"},{"attributes":{},"id":"104940","type":"BasicTicker"},{"attributes":{},"id":"104944","type":"PanTool"},{"attributes":{"children":[[{"id":"104926"},0,0]]},"id":"104978","type":"GridBox"},{"attributes":{},"id":"104948","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"104951","type":"BoxAnnotation"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"104970"},"ticker":{"id":"104940"}},"id":"104939","type":"LinearAxis"},{"attributes":{},"id":"104943","type":"ResetTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"104962","type":"Cross"},{"attributes":{"overlay":{"id":"104952"}},"id":"104947","type":"LassoSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"104943"},{"id":"104944"},{"id":"104945"},{"id":"104946"},{"id":"104947"},{"id":"104948"},{"id":"104949"},{"id":"104950"}]},"id":"104953","type":"Toolbar"},{"attributes":{"formatter":{"id":"104972"},"ticker":{"id":"104936"}},"id":"104935","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"104952","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"104953"}],"tools":[{"id":"104943"},{"id":"104944"},{"id":"104945"},{"id":"104946"},{"id":"104947"},{"id":"104948"},{"id":"104949"},{"id":"104950"}]},"id":"104979","type":"ProxyToolbar"},{"attributes":{"source":{"id":"104963"}},"id":"104965","type":"CDSView"},{"attributes":{},"id":"104972","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"104951"}},"id":"104945","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"104950","type":"HoverTool"},{"attributes":{"below":[{"id":"104935"}],"center":[{"id":"104938"},{"id":"104942"}],"left":[{"id":"104939"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"104964"}],"title":{"id":"104966"},"toolbar":{"id":"104953"},"toolbar_location":null,"x_range":{"id":"104927"},"x_scale":{"id":"104931"},"y_range":{"id":"104929"},"y_scale":{"id":"104933"}},"id":"104926","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"104974","type":"UnionRenderers"},{"attributes":{},"id":"104949","type":"SaveTool"},{"attributes":{},"id":"104927","type":"DataRange1d"}],"root_ids":["104981"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"111533c7-fdfc-484d-b909-f1d7e3bed290","root_ids":["104981"],"roots":{"104981":"ead78fc3-8346-4188-9f37-a62b0715fb4b"}}];
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