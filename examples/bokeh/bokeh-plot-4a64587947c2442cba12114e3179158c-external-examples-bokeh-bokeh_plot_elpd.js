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
    
      
      
    
      var element = document.getElementById("f719e209-22f1-4d7b-ac82-011a2d141f14");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f719e209-22f1-4d7b-ac82-011a2d141f14' but no matching script tag was found.")
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
                    
                  var docs_json = '{"94fd3108-3417-44bd-8340-62dce2bae78f":{"roots":{"references":[{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"72089"},"selection_policy":{"id":"72090"}},"id":"72079","type":"ColumnDataSource"},{"attributes":{},"id":"72064","type":"UndoTool"},{"attributes":{},"id":"72052","type":"BasicTicker"},{"attributes":{},"id":"72060","type":"PanTool"},{"attributes":{},"id":"72049","type":"LinearScale"},{"attributes":{"overlay":{"id":"72068"}},"id":"72063","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72068","type":"PolyAnnotation"},{"attributes":{"source":{"id":"72079"}},"id":"72081","type":"CDSView"},{"attributes":{"callback":null},"id":"72066","type":"HoverTool"},{"attributes":{"children":[{"id":"72096"},{"id":"72094"}]},"id":"72097","type":"Column"},{"attributes":{},"id":"72056","type":"BasicTicker"},{"attributes":{},"id":"72065","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72059"},{"id":"72060"},{"id":"72061"},{"id":"72062"},{"id":"72063"},{"id":"72064"},{"id":"72065"},{"id":"72066"}]},"id":"72069","type":"Toolbar"},{"attributes":{},"id":"72088","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"72051"}],"center":[{"id":"72054"},{"id":"72058"}],"left":[{"id":"72055"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"72080"}],"title":{"id":"72082"},"toolbar":{"id":"72069"},"toolbar_location":null,"x_range":{"id":"72043"},"x_scale":{"id":"72047"},"y_range":{"id":"72045"},"y_scale":{"id":"72049"}},"id":"72042","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"72086","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"72079"},"glyph":{"id":"72078"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"72081"}},"id":"72080","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"72069"}],"tools":[{"id":"72059"},{"id":"72060"},{"id":"72061"},{"id":"72062"},{"id":"72063"},{"id":"72064"},{"id":"72065"},{"id":"72066"}]},"id":"72095","type":"ProxyToolbar"},{"attributes":{},"id":"72045","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"72086"},"ticker":{"id":"72056"}},"id":"72055","type":"LinearAxis"},{"attributes":{"overlay":{"id":"72067"}},"id":"72061","type":"BoxZoomTool"},{"attributes":{},"id":"72047","type":"LinearScale"},{"attributes":{},"id":"72043","type":"DataRange1d"},{"attributes":{},"id":"72089","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72067","type":"BoxAnnotation"},{"attributes":{},"id":"72062","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"72088"},"ticker":{"id":"72052"}},"id":"72051","type":"LinearAxis"},{"attributes":{"axis":{"id":"72051"},"ticker":null},"id":"72054","type":"Grid"},{"attributes":{"axis":{"id":"72055"},"dimension":1,"ticker":null},"id":"72058","type":"Grid"},{"attributes":{},"id":"72090","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"72042"},0,0]]},"id":"72094","type":"GridBox"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"72082","type":"Title"},{"attributes":{"toolbar":{"id":"72095"},"toolbar_location":"above"},"id":"72096","type":"ToolbarBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"72078","type":"Cross"},{"attributes":{},"id":"72059","type":"ResetTool"}],"root_ids":["72097"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"94fd3108-3417-44bd-8340-62dce2bae78f","root_ids":["72097"],"roots":{"72097":"f719e209-22f1-4d7b-ac82-011a2d141f14"}}];
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