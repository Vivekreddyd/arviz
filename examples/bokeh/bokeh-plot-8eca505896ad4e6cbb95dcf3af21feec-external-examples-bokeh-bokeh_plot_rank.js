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
    
      
      
    
      var element = document.getElementById("b3bb05e1-3af5-4f61-894a-c8e72ad7e557");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b3bb05e1-3af5-4f61-894a-c8e72ad7e557' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1d83e1b4-8795-41fb-bfa5-e36fae111ae5":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94875","type":"VBar"},{"attributes":{},"id":"94941","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"94933"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"94814"}},"id":"94813","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"94830","type":"PolyAnnotation"},{"attributes":{},"id":"94805","type":"DataRange1d"},{"attributes":{},"id":"94951","type":"Selection"},{"attributes":{},"id":"94952","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94876","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"94879","type":"Span"},{"attributes":{"data_source":{"id":"94880"},"glyph":{"id":"94881"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94882"},"selection_glyph":null,"view":{"id":"94884"}},"id":"94883","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94882","type":"VBar"},{"attributes":{},"id":"94953","type":"Selection"},{"attributes":{"source":{"id":"94874"}},"id":"94878","type":"CDSView"},{"attributes":{"data_source":{"id":"94874"},"glyph":{"id":"94875"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94876"},"selection_glyph":null,"view":{"id":"94878"}},"id":"94877","type":"GlyphRenderer"},{"attributes":{},"id":"94954","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94936"},"selection_policy":{"id":"94937"}},"id":"94880","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94881","type":"VBar"},{"attributes":{"source":{"id":"94880"}},"id":"94884","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94888","type":"VBar"},{"attributes":{"data_source":{"id":"94886"},"glyph":{"id":"94887"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94888"},"selection_glyph":null,"view":{"id":"94890"}},"id":"94889","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"94847"},"ticker":null},"id":"94850","type":"Grid"},{"attributes":{"callback":null},"id":"94862","type":"HoverTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94887","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"94946"},"ticker":{"id":"94926"}},"id":"94851","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"94885","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"94948"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"94848"}},"id":"94847","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94938"},"selection_policy":{"id":"94939"}},"id":"94886","type":"ColumnDataSource"},{"attributes":{},"id":"94946","type":"BasicTickFormatter"},{"attributes":{},"id":"94848","type":"BasicTicker"},{"attributes":{"source":{"id":"94886"}},"id":"94890","type":"CDSView"},{"attributes":{},"id":"94955","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94894","type":"VBar"},{"attributes":{"below":[{"id":"94813"}],"center":[{"id":"94816"},{"id":"94820"},{"id":"94879"},{"id":"94885"},{"id":"94891"},{"id":"94897"}],"left":[{"id":"94817"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"94877"},{"id":"94883"},{"id":"94889"},{"id":"94895"}],"title":{"id":"94900"},"toolbar":{"id":"94831"},"toolbar_location":null,"x_range":{"id":"94805"},"x_scale":{"id":"94809"},"y_range":{"id":"94807"},"y_scale":{"id":"94811"}},"id":"94804","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"94950","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"94892"},"glyph":{"id":"94893"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94894"},"selection_glyph":null,"view":{"id":"94896"}},"id":"94895","type":"GlyphRenderer"},{"attributes":{},"id":"94956","type":"UnionRenderers"},{"attributes":{},"id":"94843","type":"LinearScale"},{"attributes":{},"id":"94948","type":"BasicTickFormatter"},{"attributes":{"text":"tau"},"id":"94900","type":"Title"},{"attributes":{"axis":{"id":"94851"},"dimension":1,"ticker":null},"id":"94854","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94893","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"94898","type":"FixedTicker"},{"attributes":{"toolbars":[{"id":"94831"},{"id":"94865"}],"tools":[{"id":"94821"},{"id":"94822"},{"id":"94823"},{"id":"94824"},{"id":"94825"},{"id":"94826"},{"id":"94827"},{"id":"94828"},{"id":"94855"},{"id":"94856"},{"id":"94857"},{"id":"94858"},{"id":"94859"},{"id":"94860"},{"id":"94861"},{"id":"94862"}]},"id":"94961","type":"ProxyToolbar"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"94891","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94934"},"selection_policy":{"id":"94935"}},"id":"94874","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94940"},"selection_policy":{"id":"94941"}},"id":"94892","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"94863"}},"id":"94857","type":"BoxZoomTool"},{"attributes":{"source":{"id":"94892"}},"id":"94896","type":"CDSView"},{"attributes":{},"id":"94856","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"94829","type":"BoxAnnotation"},{"attributes":{},"id":"94855","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"94821"},{"id":"94822"},{"id":"94823"},{"id":"94824"},{"id":"94825"},{"id":"94826"},{"id":"94827"},{"id":"94828"}]},"id":"94831","type":"Toolbar"},{"attributes":{"ticks":[0,1,2,3]},"id":"94926","type":"FixedTicker"},{"attributes":{},"id":"94934","type":"Selection"},{"attributes":{},"id":"94821","type":"ResetTool"},{"attributes":{"callback":null},"id":"94828","type":"HoverTool"},{"attributes":{},"id":"94861","type":"SaveTool"},{"attributes":{"overlay":{"id":"94829"}},"id":"94823","type":"BoxZoomTool"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"94907","type":"Span"},{"attributes":{},"id":"94935","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"94897","type":"Span"},{"attributes":{},"id":"94858","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"94864"}},"id":"94859","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"94908"},"glyph":{"id":"94909"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94910"},"selection_glyph":null,"view":{"id":"94912"}},"id":"94911","type":"GlyphRenderer"},{"attributes":{},"id":"94860","type":"UndoTool"},{"attributes":{},"id":"94814","type":"BasicTicker"},{"attributes":{},"id":"94824","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"94855"},{"id":"94856"},{"id":"94857"},{"id":"94858"},{"id":"94859"},{"id":"94860"},{"id":"94861"},{"id":"94862"}]},"id":"94865","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94904","type":"VBar"},{"attributes":{},"id":"94807","type":"DataRange1d"},{"attributes":{},"id":"94845","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94903","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94949"},"selection_policy":{"id":"94950"}},"id":"94902","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94910","type":"VBar"},{"attributes":{"source":{"id":"94902"}},"id":"94906","type":"CDSView"},{"attributes":{},"id":"94931","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"94902"},"glyph":{"id":"94903"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94904"},"selection_glyph":null,"view":{"id":"94906"}},"id":"94905","type":"GlyphRenderer"},{"attributes":{},"id":"94936","type":"Selection"},{"attributes":{"toolbar":{"id":"94961"},"toolbar_location":"above"},"id":"94962","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94951"},"selection_policy":{"id":"94952"}},"id":"94908","type":"ColumnDataSource"},{"attributes":{},"id":"94822","type":"PanTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94909","type":"VBar"},{"attributes":{},"id":"94937","type":"UnionRenderers"},{"attributes":{},"id":"94826","type":"UndoTool"},{"attributes":{"source":{"id":"94908"}},"id":"94912","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94916","type":"VBar"},{"attributes":{"text":"mu"},"id":"94928","type":"Title"},{"attributes":{"axis":{"id":"94817"},"dimension":1,"ticker":null},"id":"94820","type":"Grid"},{"attributes":{"data_source":{"id":"94914"},"glyph":{"id":"94915"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94916"},"selection_glyph":null,"view":{"id":"94918"}},"id":"94917","type":"GlyphRenderer"},{"attributes":{},"id":"94827","type":"SaveTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94915","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"94863","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"94962"},{"id":"94960"}]},"id":"94963","type":"Column"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"94913","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94953"},"selection_policy":{"id":"94954"}},"id":"94914","type":"ColumnDataSource"},{"attributes":{"source":{"id":"94914"}},"id":"94918","type":"CDSView"},{"attributes":{},"id":"94809","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94922","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"94931"},"ticker":{"id":"94898"}},"id":"94817","type":"LinearAxis"},{"attributes":{"data_source":{"id":"94920"},"glyph":{"id":"94921"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94922"},"selection_glyph":null,"view":{"id":"94924"}},"id":"94923","type":"GlyphRenderer"},{"attributes":{},"id":"94938","type":"Selection"},{"attributes":{"axis":{"id":"94813"},"ticker":null},"id":"94816","type":"Grid"},{"attributes":{},"id":"94811","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"94921","type":"VBar"},{"attributes":{},"id":"94939","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"94919","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"94955"},"selection_policy":{"id":"94956"}},"id":"94920","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"94847"}],"center":[{"id":"94850"},{"id":"94854"},{"id":"94907"},{"id":"94913"},{"id":"94919"},{"id":"94925"}],"left":[{"id":"94851"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"94905"},{"id":"94911"},{"id":"94917"},{"id":"94923"}],"title":{"id":"94928"},"toolbar":{"id":"94865"},"toolbar_location":null,"x_range":{"id":"94805"},"x_scale":{"id":"94843"},"y_range":{"id":"94807"},"y_scale":{"id":"94845"}},"id":"94840","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"94920"}},"id":"94924","type":"CDSView"},{"attributes":{},"id":"94933","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"94864","type":"PolyAnnotation"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"94925","type":"Span"},{"attributes":{"children":[[{"id":"94804"},0,0],[{"id":"94840"},0,1]]},"id":"94960","type":"GridBox"},{"attributes":{},"id":"94949","type":"Selection"},{"attributes":{"overlay":{"id":"94830"}},"id":"94825","type":"LassoSelectTool"},{"attributes":{},"id":"94940","type":"Selection"}],"root_ids":["94963"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"1d83e1b4-8795-41fb-bfa5-e36fae111ae5","root_ids":["94963"],"roots":{"94963":"b3bb05e1-3af5-4f61-894a-c8e72ad7e557"}}];
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