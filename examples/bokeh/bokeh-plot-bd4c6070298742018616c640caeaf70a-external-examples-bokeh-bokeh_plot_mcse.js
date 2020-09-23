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
    
      
      
    
      var element = document.getElementById("0822d631-75f5-4227-9a12-c303fbdb8f6a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0822d631-75f5-4227-9a12-c303fbdb8f6a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d2cb09f8-6742-4b27-939f-1da575ad7c83":{"roots":{"references":[{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.21484300137312468},"id":"90048","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716425007633},"id":"90049","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90018","type":"BoxAnnotation"},{"attributes":{},"id":"89994","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"90051","type":"Dash"},{"attributes":{"data_source":{"id":"90052"},"glyph":{"id":"90051"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"90054"}},"id":"90053","type":"GlyphRenderer"},{"attributes":{"source":{"id":"90052"}},"id":"90054","type":"CDSView"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"90076"},"selection_policy":{"id":"90077"}},"id":"90052","type":"ColumnDataSource"},{"attributes":{},"id":"90074","type":"Selection"},{"attributes":{"data_source":{"id":"90043"},"glyph":{"id":"90044"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90045"},"selection_glyph":null,"view":{"id":"90047"}},"id":"90046","type":"GlyphRenderer"},{"attributes":{},"id":"90075","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"89981","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89982","type":"BoxAnnotation"},{"attributes":{},"id":"90062","type":"Selection"},{"attributes":{},"id":"90063","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90019","type":"PolyAnnotation"},{"attributes":{},"id":"90076","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"90037","type":"Dash"},{"attributes":{},"id":"90077","type":"UnionRenderers"},{"attributes":{},"id":"90064","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89983","type":"PolyAnnotation"},{"attributes":{},"id":"90065","type":"UnionRenderers"},{"attributes":{"source":{"id":"90029"}},"id":"90033","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"90059"},"ticker":{"id":"89971"}},"id":"89970","type":"LinearAxis"},{"attributes":{},"id":"89967","type":"BasicTicker"},{"attributes":{"below":[{"id":"89966"}],"center":[{"id":"89969"},{"id":"89973"}],"left":[{"id":"89970"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"90032"},{"id":"90034"},{"id":"90035"},{"id":"90036"},{"id":"90039"}],"title":{"id":"90041"},"toolbar":{"id":"89984"},"toolbar_location":null,"x_range":{"id":"89958"},"x_scale":{"id":"89962"},"y_range":{"id":"89960"},"y_scale":{"id":"89964"}},"id":"89957","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"90083"},{"id":"90081"}]},"id":"90084","type":"Column"},{"attributes":{"toolbars":[{"id":"89984"},{"id":"90020"}],"tools":[{"id":"89974"},{"id":"89975"},{"id":"89976"},{"id":"89977"},{"id":"89978"},{"id":"89979"},{"id":"89980"},{"id":"89981"},{"id":"90010"},{"id":"90011"},{"id":"90012"},{"id":"90013"},{"id":"90014"},{"id":"90015"},{"id":"90016"},{"id":"90017"}]},"id":"90082","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"89970"},"dimension":1,"ticker":null},"id":"89973","type":"Grid"},{"attributes":{"toolbar":{"id":"90082"},"toolbar_location":"above"},"id":"90083","type":"ToolbarBox"},{"attributes":{"text":"mu"},"id":"90055","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90030","type":"Circle"},{"attributes":{"children":[[{"id":"89957"},0,0],[{"id":"89993"},0,1]]},"id":"90081","type":"GridBox"},{"attributes":{"overlay":{"id":"89983"}},"id":"89978","type":"LassoSelectTool"},{"attributes":{},"id":"90071","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"90029"},"glyph":{"id":"90030"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90031"},"selection_glyph":null,"view":{"id":"90033"}},"id":"90032","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"90061"},"ticker":{"id":"89967"}},"id":"89966","type":"LinearAxis"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"90073"},"ticker":{"id":"90003"}},"id":"90002","type":"LinearAxis"},{"attributes":{},"id":"90073","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"90002"}],"center":[{"id":"90005"},{"id":"90009"}],"left":[{"id":"90006"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"90046"},{"id":"90048"},{"id":"90049"},{"id":"90050"},{"id":"90053"}],"title":{"id":"90055"},"toolbar":{"id":"90020"},"toolbar_location":null,"x_range":{"id":"89994"},"x_scale":{"id":"89998"},"y_range":{"id":"89996"},"y_scale":{"id":"90000"}},"id":"89993","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"89996","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"90071"},"ticker":{"id":"90007"}},"id":"90006","type":"LinearAxis"},{"attributes":{},"id":"90059","type":"BasicTickFormatter"},{"attributes":{},"id":"89998","type":"LinearScale"},{"attributes":{},"id":"90000","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"90062"},"selection_policy":{"id":"90063"}},"id":"90029","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"90017","type":"HoverTool"},{"attributes":{},"id":"89958","type":"DataRange1d"},{"attributes":{},"id":"90061","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"89966"},"ticker":null},"id":"89969","type":"Grid"},{"attributes":{},"id":"90003","type":"BasicTicker"},{"attributes":{"axis":{"id":"90002"},"ticker":null},"id":"90005","type":"Grid"},{"attributes":{},"id":"89979","type":"UndoTool"},{"attributes":{"axis":{"id":"90006"},"dimension":1,"ticker":null},"id":"90009","type":"Grid"},{"attributes":{},"id":"90007","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90044","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90031","type":"Circle"},{"attributes":{"overlay":{"id":"90018"}},"id":"90012","type":"BoxZoomTool"},{"attributes":{},"id":"90011","type":"PanTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238711},"id":"90034","type":"Span"},{"attributes":{},"id":"90010","type":"ResetTool"},{"attributes":{},"id":"90016","type":"SaveTool"},{"attributes":{},"id":"90013","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"90019"}},"id":"90014","type":"LassoSelectTool"},{"attributes":{},"id":"90015","type":"UndoTool"},{"attributes":{},"id":"89962","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90010"},{"id":"90011"},{"id":"90012"},{"id":"90013"},{"id":"90014"},{"id":"90015"},{"id":"90016"},{"id":"90017"}]},"id":"90020","type":"Toolbar"},{"attributes":{},"id":"89964","type":"LinearScale"},{"attributes":{"overlay":{"id":"89982"}},"id":"89976","type":"BoxZoomTool"},{"attributes":{},"id":"89975","type":"PanTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"90050","type":"Span"},{"attributes":{},"id":"89974","type":"ResetTool"},{"attributes":{"text":"tau"},"id":"90041","type":"Title"},{"attributes":{},"id":"89980","type":"SaveTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"90036","type":"Span"},{"attributes":{},"id":"89977","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90045","type":"Circle"},{"attributes":{"end":1,"start":-0.05},"id":"89960","type":"DataRange1d"},{"attributes":{},"id":"89971","type":"BasicTicker"},{"attributes":{"source":{"id":"90043"}},"id":"90047","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"90074"},"selection_policy":{"id":"90075"}},"id":"90043","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89974"},{"id":"89975"},{"id":"89976"},{"id":"89977"},{"id":"89978"},{"id":"89979"},{"id":"89980"},{"id":"89981"}]},"id":"89984","type":"Toolbar"},{"attributes":{"data_source":{"id":"90038"},"glyph":{"id":"90037"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"90040"}},"id":"90039","type":"GlyphRenderer"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"90064"},"selection_policy":{"id":"90065"}},"id":"90038","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90038"}},"id":"90040","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.17824444314769777},"id":"90035","type":"Span"}],"root_ids":["90084"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"d2cb09f8-6742-4b27-939f-1da575ad7c83","root_ids":["90084"],"roots":{"90084":"0822d631-75f5-4227-9a12-c303fbdb8f6a"}}];
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