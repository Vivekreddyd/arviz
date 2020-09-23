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
    
      
      
    
      var element = document.getElementById("48b22356-3227-4299-b988-f92d6dfce302");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '48b22356-3227-4299-b988-f92d6dfce302' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c4ef8baa-bc6e-4d25-85ca-242b267788af":{"roots":{"references":[{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"72329","type":"Line"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"72348"},"ticker":{"id":"72292"}},"id":"72291","type":"LinearAxis"},{"attributes":{"data_source":{"id":"72328"},"glyph":{"id":"72329"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72330"},"selection_glyph":null,"view":{"id":"72332"}},"id":"72331","type":"GlyphRenderer"},{"attributes":{},"id":"72285","type":"DataRange1d"},{"attributes":{"text":"b"},"id":"72342","type":"Title"},{"attributes":{},"id":"72292","type":"BasicTicker"},{"attributes":{"callback":null},"id":"72306","type":"HoverTool"},{"attributes":{},"id":"72353","type":"Selection"},{"attributes":{"children":[{"id":"72362"},{"id":"72360"}]},"id":"72363","type":"Column"},{"attributes":{},"id":"72289","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72355"},"selection_policy":{"id":"72356"}},"id":"72333","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"72291"},"ticker":null},"id":"72294","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"72330","type":"Line"},{"attributes":{},"id":"72354","type":"UnionRenderers"},{"attributes":{"source":{"id":"72328"}},"id":"72332","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72308","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72334","type":"Circle"},{"attributes":{"axis":{"id":"72295"},"dimension":1,"ticker":null},"id":"72298","type":"Grid"},{"attributes":{},"id":"72296","type":"BasicTicker"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"72321"},{"id":"72326"}]},"id":"72340","type":"LegendItem"},{"attributes":{"data_source":{"id":"72333"},"glyph":{"id":"72334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72335"},"selection_glyph":null,"view":{"id":"72337"}},"id":"72336","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72320","type":"Circle"},{"attributes":{"data_source":{"id":"72323"},"glyph":{"id":"72324"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72325"},"selection_glyph":null,"view":{"id":"72327"}},"id":"72326","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"72307"}},"id":"72301","type":"BoxZoomTool"},{"attributes":{"source":{"id":"72333"}},"id":"72337","type":"CDSView"},{"attributes":{},"id":"72300","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72349"},"selection_policy":{"id":"72350"}},"id":"72318","type":"ColumnDataSource"},{"attributes":{},"id":"72299","type":"ResetTool"},{"attributes":{"click_policy":"hide","items":[{"id":"72340"},{"id":"72341"}],"location":"center_right","orientation":"horizontal"},"id":"72339","type":"Legend"},{"attributes":{},"id":"72355","type":"Selection"},{"attributes":{},"id":"72305","type":"SaveTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"72336"},{"id":"72331"}]},"id":"72341","type":"LegendItem"},{"attributes":{},"id":"72283","type":"DataRange1d"},{"attributes":{},"id":"72302","type":"WheelZoomTool"},{"attributes":{},"id":"72356","type":"UnionRenderers"},{"attributes":{"above":[{"id":"72339"}],"below":[{"id":"72291"}],"center":[{"id":"72294"},{"id":"72298"}],"left":[{"id":"72295"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"72321"},{"id":"72326"},{"id":"72331"},{"id":"72336"},{"id":"72338"}],"title":{"id":"72342"},"toolbar":{"id":"72309"},"toolbar_location":null,"x_range":{"id":"72283"},"x_scale":{"id":"72287"},"y_range":{"id":"72285"},"y_scale":{"id":"72289"}},"id":"72282","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"72361"},"toolbar_location":"above"},"id":"72362","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"72308"}},"id":"72303","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72319","type":"Circle"},{"attributes":{},"id":"72304","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72299"},{"id":"72300"},{"id":"72301"},{"id":"72302"},{"id":"72303"},{"id":"72304"},{"id":"72305"},{"id":"72306"}]},"id":"72309","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"72309"}],"tools":[{"id":"72299"},{"id":"72300"},{"id":"72301"},{"id":"72302"},{"id":"72303"},{"id":"72304"},{"id":"72305"},{"id":"72306"}]},"id":"72361","type":"ProxyToolbar"},{"attributes":{},"id":"72351","type":"Selection"},{"attributes":{},"id":"72352","type":"UnionRenderers"},{"attributes":{},"id":"72346","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"72324","type":"Line"},{"attributes":{},"id":"72348","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"72323"}},"id":"72327","type":"CDSView"},{"attributes":{"data_source":{"id":"72318"},"glyph":{"id":"72319"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72320"},"selection_glyph":null,"view":{"id":"72322"}},"id":"72321","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72351"},"selection_policy":{"id":"72352"}},"id":"72323","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"72282"},0,0]]},"id":"72360","type":"GridBox"},{"attributes":{"source":{"id":"72318"}},"id":"72322","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72307","type":"BoxAnnotation"},{"attributes":{"axis_label":"ESS","formatter":{"id":"72346"},"ticker":{"id":"72296"}},"id":"72295","type":"LinearAxis"},{"attributes":{},"id":"72350","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"72335","type":"Circle"},{"attributes":{},"id":"72349","type":"Selection"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"72338","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"72353"},"selection_policy":{"id":"72354"}},"id":"72328","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"72325","type":"Line"},{"attributes":{},"id":"72287","type":"LinearScale"}],"root_ids":["72363"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"c4ef8baa-bc6e-4d25-85ca-242b267788af","root_ids":["72363"],"roots":{"72363":"48b22356-3227-4299-b988-f92d6dfce302"}}];
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