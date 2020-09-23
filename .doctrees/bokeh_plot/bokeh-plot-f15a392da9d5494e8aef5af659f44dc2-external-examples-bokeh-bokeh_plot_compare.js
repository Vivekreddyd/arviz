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
    
      
      
    
      var element = document.getElementById("bcb4c5bd-d7c9-41bb-9cbb-4a13342bde7f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bcb4c5bd-d7c9-41bb-9cbb-4a13342bde7f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1b8ad7fb-92e1-4c76-9971-f56f787861d3":{"roots":{"references":[{"attributes":{"data_source":{"id":"69914"},"glyph":{"id":"69915"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69916"},"selection_glyph":null,"view":{"id":"69918"}},"id":"69917","type":"GlyphRenderer"},{"attributes":{"end":0.5,"start":-1.5},"id":"69859","type":"DataRange1d"},{"attributes":{},"id":"69933","type":"Selection"},{"attributes":{"data_source":{"id":"69894"},"glyph":{"id":"69895"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69896"},"selection_glyph":null,"view":{"id":"69898"}},"id":"69897","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"69869"},"dimension":1,"ticker":null},"id":"69872","type":"Grid"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"69929"},"selection_policy":{"id":"69930"}},"id":"69904","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"69904"},"glyph":{"id":"69905"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69906"},"selection_glyph":null,"view":{"id":"69908"}},"id":"69907","type":"GlyphRenderer"},{"attributes":{},"id":"69876","type":"WheelZoomTool"},{"attributes":{},"id":"69930","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69900","type":"MultiLine"},{"attributes":{},"id":"69932","type":"UnionRenderers"},{"attributes":{"source":{"id":"69909"}},"id":"69913","type":"CDSView"},{"attributes":{"formatter":{"id":"69922"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"69892"}},"id":"69869","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"69881","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69896","type":"Triangle"},{"attributes":{"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"69933"},"selection_policy":{"id":"69934"}},"id":"69914","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"69940"},{"id":"69938"}]},"id":"69941","type":"Column"},{"attributes":{"source":{"id":"69914"}},"id":"69918","type":"CDSView"},{"attributes":{"source":{"id":"69899"}},"id":"69903","type":"CDSView"},{"attributes":{"callback":null},"id":"69880","type":"HoverTool"},{"attributes":{},"id":"69929","type":"Selection"},{"attributes":{},"id":"69873","type":"ResetTool"},{"attributes":{},"id":"69931","type":"Selection"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69915","type":"Circle"},{"attributes":{},"id":"69878","type":"UndoTool"},{"attributes":{"data":{"xs":[[-31.996447095230966,-29.37813354154866],[-32.06146324661885,-29.55928510658125]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"69931"},"selection_policy":{"id":"69932"}},"id":"69909","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"69882"}},"id":"69877","type":"LassoSelectTool"},{"attributes":{"source":{"id":"69904"}},"id":"69908","type":"CDSView"},{"attributes":{},"id":"69861","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69873"},{"id":"69874"},{"id":"69875"},{"id":"69876"},{"id":"69877"},{"id":"69878"},{"id":"69879"},{"id":"69880"}]},"id":"69883","type":"Toolbar"},{"attributes":{},"id":"69922","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69905","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69901","type":"MultiLine"},{"attributes":{"children":[[{"id":"69856"},0,0]]},"id":"69938","type":"GridBox"},{"attributes":{},"id":"69927","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69916","type":"Circle"},{"attributes":{},"id":"69926","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"69881"}},"id":"69875","type":"BoxZoomTool"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"69892","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69895","type":"Triangle"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69911","type":"MultiLine"},{"attributes":{},"id":"69857","type":"DataRange1d"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"69919","type":"Span"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69910","type":"MultiLine"},{"attributes":{},"id":"69866","type":"BasicTicker"},{"attributes":{"text":""},"id":"69920","type":"Title"},{"attributes":{},"id":"69934","type":"UnionRenderers"},{"attributes":{},"id":"69928","type":"UnionRenderers"},{"attributes":{},"id":"69924","type":"BasicTickFormatter"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"69927"},"selection_policy":{"id":"69928"}},"id":"69899","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"69865"}],"center":[{"id":"69868"},{"id":"69872"}],"left":[{"id":"69869"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"69897"},{"id":"69902"},{"id":"69907"},{"id":"69912"},{"id":"69917"},{"id":"69919"}],"title":{"id":"69920"},"toolbar":{"id":"69883"},"toolbar_location":null,"x_range":{"id":"69857"},"x_scale":{"id":"69861"},"y_range":{"id":"69859"},"y_scale":{"id":"69863"}},"id":"69856","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"69939"},"toolbar_location":"above"},"id":"69940","type":"ToolbarBox"},{"attributes":{},"id":"69925","type":"Selection"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"69925"},"selection_policy":{"id":"69926"}},"id":"69894","type":"ColumnDataSource"},{"attributes":{},"id":"69874","type":"PanTool"},{"attributes":{"data_source":{"id":"69909"},"glyph":{"id":"69910"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69911"},"selection_glyph":null,"view":{"id":"69913"}},"id":"69912","type":"GlyphRenderer"},{"attributes":{"axis_label":"Log","formatter":{"id":"69924"},"ticker":{"id":"69866"}},"id":"69865","type":"LinearAxis"},{"attributes":{"data_source":{"id":"69899"},"glyph":{"id":"69900"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69901"},"selection_glyph":null,"view":{"id":"69903"}},"id":"69902","type":"GlyphRenderer"},{"attributes":{"source":{"id":"69894"}},"id":"69898","type":"CDSView"},{"attributes":{},"id":"69863","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69906","type":"Circle"},{"attributes":{"axis":{"id":"69865"},"ticker":null},"id":"69868","type":"Grid"},{"attributes":{"toolbars":[{"id":"69883"}],"tools":[{"id":"69873"},{"id":"69874"},{"id":"69875"},{"id":"69876"},{"id":"69877"},{"id":"69878"},{"id":"69879"},{"id":"69880"}]},"id":"69939","type":"ProxyToolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"69882","type":"PolyAnnotation"},{"attributes":{},"id":"69879","type":"SaveTool"}],"root_ids":["69941"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"1b8ad7fb-92e1-4c76-9971-f56f787861d3","root_ids":["69941"],"roots":{"69941":"bcb4c5bd-d7c9-41bb-9cbb-4a13342bde7f"}}];
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