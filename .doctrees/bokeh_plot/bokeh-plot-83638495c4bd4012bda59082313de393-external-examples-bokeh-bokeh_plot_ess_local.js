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
    
      
      
    
      var element = document.getElementById("993bcc73-ffee-4bfe-bf84-11284a151197");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '993bcc73-ffee-4bfe-bf84-11284a151197' but no matching script tag was found.")
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
                    
                  var docs_json = '{"adb65fda-04db-4c11-a33b-6a8cddd2a17a":{"roots":{"references":[{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72450","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"72424"},0,0]]},"id":"72485","type":"GridBox"},{"attributes":{"callback":null},"id":"72448","type":"HoverTool"},{"attributes":{"axis":{"id":"72437"},"dimension":1,"ticker":null},"id":"72440","type":"Grid"},{"attributes":{},"id":"72438","type":"BasicTicker"},{"attributes":{},"id":"72475","type":"BasicTickFormatter"},{"attributes":{},"id":"72478","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72462","type":"Circle"},{"attributes":{"overlay":{"id":"72449"}},"id":"72443","type":"BoxZoomTool"},{"attributes":{},"id":"72479","type":"UnionRenderers"},{"attributes":{},"id":"72442","type":"PanTool"},{"attributes":{},"id":"72477","type":"BasicTickFormatter"},{"attributes":{},"id":"72441","type":"ResetTool"},{"attributes":{},"id":"72447","type":"SaveTool"},{"attributes":{},"id":"72444","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"72450"}},"id":"72445","type":"LassoSelectTool"},{"attributes":{},"id":"72446","type":"UndoTool"},{"attributes":{"below":[{"id":"72433"}],"center":[{"id":"72436"},{"id":"72440"}],"left":[{"id":"72437"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"72463"},{"id":"72467"},{"id":"72469"},{"id":"72470"}],"title":{"id":"72471"},"toolbar":{"id":"72451"},"toolbar_location":null,"x_range":{"id":"72425"},"x_scale":{"id":"72429"},"y_range":{"id":"72427"},"y_scale":{"id":"72431"}},"id":"72424","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"72480","type":"Selection"},{"attributes":{"text":"mu"},"id":"72471","type":"Title"},{"attributes":{},"id":"72481","type":"UnionRenderers"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"72465","type":"Dash"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72441"},{"id":"72442"},{"id":"72443"},{"id":"72444"},{"id":"72445"},{"id":"72446"},{"id":"72447"},{"id":"72448"}]},"id":"72451","type":"Toolbar"},{"attributes":{},"id":"72427","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72478"},"selection_policy":{"id":"72479"}},"id":"72460","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"72460"},"glyph":{"id":"72461"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72462"},"selection_glyph":null,"view":{"id":"72464"}},"id":"72463","type":"GlyphRenderer"},{"attributes":{},"id":"72425","type":"DataRange1d"},{"attributes":{"source":{"id":"72466"}},"id":"72468","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72461","type":"Circle"},{"attributes":{"source":{"id":"72460"}},"id":"72464","type":"CDSView"},{"attributes":{},"id":"72431","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"72470","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72449","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"72466"},"glyph":{"id":"72465"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"72468"}},"id":"72467","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"72486"},"toolbar_location":"above"},"id":"72487","type":"ToolbarBox"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"72480"},"selection_policy":{"id":"72481"}},"id":"72466","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"72469","type":"Span"},{"attributes":{},"id":"72429","type":"LinearScale"},{"attributes":{"children":[{"id":"72487"},{"id":"72485"}]},"id":"72488","type":"Column"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"72477"},"ticker":{"id":"72434"}},"id":"72433","type":"LinearAxis"},{"attributes":{},"id":"72434","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"72451"}],"tools":[{"id":"72441"},{"id":"72442"},{"id":"72443"},{"id":"72444"},{"id":"72445"},{"id":"72446"},{"id":"72447"},{"id":"72448"}]},"id":"72486","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"72433"},"ticker":null},"id":"72436","type":"Grid"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"72475"},"ticker":{"id":"72438"}},"id":"72437","type":"LinearAxis"}],"root_ids":["72488"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"adb65fda-04db-4c11-a33b-6a8cddd2a17a","root_ids":["72488"],"roots":{"72488":"993bcc73-ffee-4bfe-bf84-11284a151197"}}];
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