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
    
      
      
    
      var element = document.getElementById("573d7df3-7818-49f0-b1ed-a6c038b3da0e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '573d7df3-7818-49f0-b1ed-a6c038b3da0e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e27b2654-3679-401d-aebd-1260bd523613":{"roots":{"references":[{"attributes":{"data":{},"selected":{"id":"72833"},"selection_policy":{"id":"72834"}},"id":"72763","type":"ColumnDataSource"},{"attributes":{},"id":"72804","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"72773"},"glyph":{"id":"72774"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72775"},"selection_glyph":null,"view":{"id":"72777"}},"id":"72776","type":"GlyphRenderer"},{"attributes":{},"id":"72632","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72665","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"72765","type":"Circle"},{"attributes":{},"id":"72819","type":"Selection"},{"attributes":{"data_source":{"id":"72763"},"glyph":{"id":"72764"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72765"},"selection_glyph":null,"view":{"id":"72767"}},"id":"72766","type":"GlyphRenderer"},{"attributes":{},"id":"72820","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72769","type":"Line"},{"attributes":{"toolbars":[{"id":"72654"}],"tools":[{"id":"72644"},{"id":"72645"},{"id":"72646"},{"id":"72647"},{"id":"72648"},{"id":"72649"},{"id":"72650"},{"id":"72651"}]},"id":"72845","type":"ProxyToolbar"},{"attributes":{},"id":"72835","type":"Selection"},{"attributes":{"source":{"id":"72763"}},"id":"72767","type":"CDSView"},{"attributes":{},"id":"72836","type":"UnionRenderers"},{"attributes":{},"id":"72644","type":"ResetTool"},{"attributes":{},"id":"72805","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72774","type":"Line"},{"attributes":{},"id":"72806","type":"UnionRenderers"},{"attributes":{"source":{"id":"72768"}},"id":"72772","type":"CDSView"},{"attributes":{"data_source":{"id":"72668"},"glyph":{"id":"72669"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72670"},"selection_glyph":null,"view":{"id":"72672"}},"id":"72671","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72770","type":"Line"},{"attributes":{},"id":"72821","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"72674","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"72780","type":"Circle"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"72786","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72652","type":"BoxAnnotation"},{"attributes":{"source":{"id":"72663"}},"id":"72667","type":"CDSView"},{"attributes":{"source":{"id":"72668"}},"id":"72672","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"72779","type":"Circle"},{"attributes":{},"id":"72822","type":"UnionRenderers"},{"attributes":{},"id":"72790","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"72837"},"selection_policy":{"id":"72838"}},"id":"72773","type":"ColumnDataSource"},{"attributes":{},"id":"72837","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72644"},{"id":"72645"},{"id":"72646"},{"id":"72647"},{"id":"72648"},{"id":"72649"},{"id":"72650"},{"id":"72651"}]},"id":"72654","type":"Toolbar"},{"attributes":{"source":{"id":"72773"}},"id":"72777","type":"CDSView"},{"attributes":{"data_source":{"id":"72673"},"glyph":{"id":"72674"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72675"},"selection_glyph":null,"view":{"id":"72677"}},"id":"72676","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"72793"},"selection_policy":{"id":"72794"}},"id":"72663","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"72795"},"selection_policy":{"id":"72796"}},"id":"72668","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"72778"},"glyph":{"id":"72779"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72780"},"selection_glyph":null,"view":{"id":"72782"}},"id":"72781","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72775","type":"Line"},{"attributes":{},"id":"72807","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72670","type":"Line"},{"attributes":{},"id":"72838","type":"UnionRenderers"},{"attributes":{},"id":"72808","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72664","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72679","type":"Line"},{"attributes":{"data":{},"selected":{"id":"72839"},"selection_policy":{"id":"72840"}},"id":"72778","type":"ColumnDataSource"},{"attributes":{},"id":"72823","type":"Selection"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"72835"},"selection_policy":{"id":"72836"}},"id":"72768","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72778"}},"id":"72782","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"72675","type":"Circle"},{"attributes":{},"id":"72824","type":"UnionRenderers"},{"attributes":{},"id":"72792","type":"BasicTickFormatter"},{"attributes":{},"id":"72839","type":"Selection"},{"attributes":{"axis":{"id":"72640"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"72643","type":"Grid"},{"attributes":{},"id":"72840","type":"UnionRenderers"},{"attributes":{},"id":"72809","type":"Selection"},{"attributes":{"formatter":{"id":"72790"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"72787"}},"id":"72640","type":"LinearAxis"},{"attributes":{},"id":"72810","type":"UnionRenderers"},{"attributes":{"axis":{"id":"72636"},"ticker":null},"id":"72639","type":"Grid"},{"attributes":{"text":"94.0% HDI"},"id":"72783","type":"Title"},{"attributes":{},"id":"72825","type":"Selection"},{"attributes":{},"id":"72826","type":"UnionRenderers"},{"attributes":{},"id":"72803","type":"Selection"},{"attributes":{},"id":"72811","type":"Selection"},{"attributes":{},"id":"72812","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"72845"},"toolbar_location":"above"},"id":"72846","type":"ToolbarBox"},{"attributes":{},"id":"72827","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72669","type":"Line"},{"attributes":{},"id":"72828","type":"UnionRenderers"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"72787","type":"FixedTicker"},{"attributes":{"formatter":{"id":"72792"},"ticker":{"id":"72637"}},"id":"72636","type":"LinearAxis"},{"attributes":{},"id":"72813","type":"Selection"},{"attributes":{},"id":"72814","type":"UnionRenderers"},{"attributes":{},"id":"72829","type":"Selection"},{"attributes":{"data_source":{"id":"72683"},"glyph":{"id":"72684"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72685"},"selection_glyph":null,"view":{"id":"72687"}},"id":"72686","type":"GlyphRenderer"},{"attributes":{},"id":"72830","type":"UnionRenderers"},{"attributes":{},"id":"72645","type":"PanTool"},{"attributes":{},"id":"72815","type":"Selection"},{"attributes":{},"id":"72647","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"72693"},"glyph":{"id":"72694"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72695"},"selection_glyph":null,"view":{"id":"72697"}},"id":"72696","type":"GlyphRenderer"},{"attributes":{},"id":"72650","type":"SaveTool"},{"attributes":{},"id":"72816","type":"UnionRenderers"},{"attributes":{"source":{"id":"72673"}},"id":"72677","type":"CDSView"},{"attributes":{},"id":"72649","type":"UndoTool"},{"attributes":{},"id":"72831","type":"Selection"},{"attributes":{"overlay":{"id":"72653"}},"id":"72648","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"72708"},"glyph":{"id":"72709"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72710"},"selection_glyph":null,"view":{"id":"72712"}},"id":"72711","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72684","type":"Line"},{"attributes":{},"id":"72832","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"72651","type":"HoverTool"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"72805"},"selection_policy":{"id":"72806"}},"id":"72693","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72678"}},"id":"72682","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72680","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"72690","type":"Circle"},{"attributes":{},"id":"72817","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"72689","type":"Circle"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"72801"},"selection_policy":{"id":"72802"}},"id":"72683","type":"ColumnDataSource"},{"attributes":{},"id":"72818","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"72652"}},"id":"72646","type":"BoxZoomTool"},{"attributes":{"source":{"id":"72683"}},"id":"72687","type":"CDSView"},{"attributes":{},"id":"72634","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72685","type":"Line"},{"attributes":{},"id":"72833","type":"Selection"},{"attributes":{"data_source":{"id":"72663"},"glyph":{"id":"72664"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72665"},"selection_glyph":null,"view":{"id":"72667"}},"id":"72666","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72688"},"glyph":{"id":"72689"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72690"},"selection_glyph":null,"view":{"id":"72692"}},"id":"72691","type":"GlyphRenderer"},{"attributes":{},"id":"72834","type":"UnionRenderers"},{"attributes":{"source":{"id":"72688"}},"id":"72692","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"72797"},"selection_policy":{"id":"72798"}},"id":"72673","type":"ColumnDataSource"},{"attributes":{},"id":"72637","type":"BasicTicker"},{"attributes":{"data":{},"selected":{"id":"72803"},"selection_policy":{"id":"72804"}},"id":"72688","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72694","type":"Line"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"72811"},"selection_policy":{"id":"72812"}},"id":"72708","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"72704","type":"Circle"},{"attributes":{"data_source":{"id":"72698"},"glyph":{"id":"72699"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72700"},"selection_glyph":null,"view":{"id":"72702"}},"id":"72701","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72709","type":"Line"},{"attributes":{"source":{"id":"72693"}},"id":"72697","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72695","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"72705","type":"Circle"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"72807"},"selection_policy":{"id":"72808"}},"id":"72698","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72699","type":"Line"},{"attributes":{"source":{"id":"72698"}},"id":"72702","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72700","type":"Line"},{"attributes":{"data_source":{"id":"72703"},"glyph":{"id":"72704"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72705"},"selection_glyph":null,"view":{"id":"72707"}},"id":"72706","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72713"},"glyph":{"id":"72714"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72715"},"selection_glyph":null,"view":{"id":"72717"}},"id":"72716","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"72809"},"selection_policy":{"id":"72810"}},"id":"72703","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"72817"},"selection_policy":{"id":"72818"}},"id":"72723","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"72678"},"glyph":{"id":"72679"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72680"},"selection_glyph":null,"view":{"id":"72682"}},"id":"72681","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72703"}},"id":"72707","type":"CDSView"},{"attributes":{"data_source":{"id":"72723"},"glyph":{"id":"72724"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72725"},"selection_glyph":null,"view":{"id":"72727"}},"id":"72726","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72714","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72653","type":"PolyAnnotation"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72724","type":"Line"},{"attributes":{"source":{"id":"72708"}},"id":"72712","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72710","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"72720","type":"Circle"},{"attributes":{},"id":"72793","type":"Selection"},{"attributes":{"below":[{"id":"72636"}],"center":[{"id":"72639"},{"id":"72643"}],"left":[{"id":"72640"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"72666"},{"id":"72671"},{"id":"72676"},{"id":"72681"},{"id":"72686"},{"id":"72691"},{"id":"72696"},{"id":"72701"},{"id":"72706"},{"id":"72711"},{"id":"72716"},{"id":"72721"},{"id":"72726"},{"id":"72731"},{"id":"72736"},{"id":"72741"},{"id":"72746"},{"id":"72751"},{"id":"72756"},{"id":"72761"},{"id":"72766"},{"id":"72771"},{"id":"72776"},{"id":"72781"}],"title":{"id":"72783"},"toolbar":{"id":"72654"},"toolbar_location":null,"x_range":{"id":"72785"},"x_scale":{"id":"72632"},"y_range":{"id":"72786"},"y_scale":{"id":"72634"}},"id":"72627","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"72719","type":"Circle"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"72813"},"selection_policy":{"id":"72814"}},"id":"72713","type":"ColumnDataSource"},{"attributes":{},"id":"72794","type":"UnionRenderers"},{"attributes":{"source":{"id":"72713"}},"id":"72717","type":"CDSView"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"72799"},"selection_policy":{"id":"72800"}},"id":"72678","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72715","type":"Line"},{"attributes":{"data_source":{"id":"72718"},"glyph":{"id":"72719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72720"},"selection_glyph":null,"view":{"id":"72722"}},"id":"72721","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72728"},"glyph":{"id":"72729"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72730"},"selection_glyph":null,"view":{"id":"72732"}},"id":"72731","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"72815"},"selection_policy":{"id":"72816"}},"id":"72718","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"72823"},"selection_policy":{"id":"72824"}},"id":"72738","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72718"}},"id":"72722","type":"CDSView"},{"attributes":{},"id":"72795","type":"Selection"},{"attributes":{"data_source":{"id":"72738"},"glyph":{"id":"72739"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72740"},"selection_glyph":null,"view":{"id":"72742"}},"id":"72741","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72729","type":"Line"},{"attributes":{},"id":"72796","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72739","type":"Line"},{"attributes":{"source":{"id":"72723"}},"id":"72727","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72725","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"72735","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"72734","type":"Circle"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"72819"},"selection_policy":{"id":"72820"}},"id":"72728","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72728"}},"id":"72732","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72730","type":"Line"},{"attributes":{},"id":"72797","type":"Selection"},{"attributes":{"data_source":{"id":"72733"},"glyph":{"id":"72734"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72735"},"selection_glyph":null,"view":{"id":"72737"}},"id":"72736","type":"GlyphRenderer"},{"attributes":{},"id":"72798","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"72743"},"glyph":{"id":"72744"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72745"},"selection_glyph":null,"view":{"id":"72747"}},"id":"72746","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"72821"},"selection_policy":{"id":"72822"}},"id":"72733","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"72627"},0,0]]},"id":"72844","type":"GridBox"},{"attributes":{"children":[{"id":"72846"},{"id":"72844"}]},"id":"72847","type":"Column"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"72829"},"selection_policy":{"id":"72830"}},"id":"72753","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72733"}},"id":"72737","type":"CDSView"},{"attributes":{"data_source":{"id":"72753"},"glyph":{"id":"72754"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72755"},"selection_glyph":null,"view":{"id":"72757"}},"id":"72756","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72744","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72754","type":"Line"},{"attributes":{"source":{"id":"72738"}},"id":"72742","type":"CDSView"},{"attributes":{},"id":"72799","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72740","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"72750","type":"Circle"},{"attributes":{},"id":"72800","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"72749","type":"Circle"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"72825"},"selection_policy":{"id":"72826"}},"id":"72743","type":"ColumnDataSource"},{"attributes":{"source":{"id":"72743"}},"id":"72747","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72745","type":"Line"},{"attributes":{"data_source":{"id":"72748"},"glyph":{"id":"72749"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72750"},"selection_glyph":null,"view":{"id":"72752"}},"id":"72751","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"72758"},"glyph":{"id":"72759"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72760"},"selection_glyph":null,"view":{"id":"72762"}},"id":"72761","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"72827"},"selection_policy":{"id":"72828"}},"id":"72748","type":"ColumnDataSource"},{"attributes":{},"id":"72801","type":"Selection"},{"attributes":{"data_source":{"id":"72768"},"glyph":{"id":"72769"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72770"},"selection_glyph":null,"view":{"id":"72772"}},"id":"72771","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72748"}},"id":"72752","type":"CDSView"},{"attributes":{},"id":"72802","type":"UnionRenderers"},{"attributes":{"bounds":"auto","min_interval":1},"id":"72785","type":"DataRange1d"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72759","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"72760","type":"Line"},{"attributes":{"source":{"id":"72753"}},"id":"72757","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"72755","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"72764","type":"Circle"},{"attributes":{"source":{"id":"72758"}},"id":"72762","type":"CDSView"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"72831"},"selection_policy":{"id":"72832"}},"id":"72758","type":"ColumnDataSource"}],"root_ids":["72847"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"e27b2654-3679-401d-aebd-1260bd523613","root_ids":["72847"],"roots":{"72847":"573d7df3-7818-49f0-b1ed-a6c038b3da0e"}}];
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