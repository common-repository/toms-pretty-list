<?php
/**
 * Plugin Name:       TomS Pretty List
 * Description:       Simple and beautiful list block. Support all font icon library and SVG icon.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.2
 * Author:            Tom Sneddon
 * Author URI:        https://TomSneddon.org
 * License:           GPLv3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       toms-pretty-list
 * Domain Path:		  /languages
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class TomSPrettyList{
    function __construct() {
        add_action( 'init', array($this, 'TomSPrettyListAdminAssets'));
        
        // 添加 TomS Blocks 分类到 Gutenberg
        $filter = version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ? 'block_categories_all' : 'block_categories';

        add_filter( $filter, array($this, 'TomSBlocksCategory'), 10, 2 );
    }
    function TomSBlocksCategory($block_categories, $editor_context){
        $checkTomSBlocks = wp_list_pluck( $block_categories, 'slug');

        if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' )&& in_array('tomsneddon', $checkTomSBlocks, true) === false ) {
            array_push(
                $block_categories,
                $TomSBlocks = array(
                    'slug'  => 'tomsneddon',
                    'title' => esc_html__( 'TomS Blocks', 'toms-pretty-list' ),
                    'icon'  => null
                )
            );
        }elseif(in_array('tomsneddon', $checkTomSBlocks, true) === false){
            array_merge(
                $block_categories,
                [
                        [
                            'slug'  => 'tomsneddon',
                            'title' => esc_html__( 'TomS Blocks', 'toms-pretty-list' ),
                            'icon'  => null
                        ],
                ]
            );
        }

        return $block_categories;

    }
    function TomSPrettyListAdminAssets() {

        load_plugin_textdomain( 'toms-pretty-list', false, dirname(plugin_basename( __FILE__ )) . '/languages' );

        wp_register_script( 'toms-pretty-list-js', plugin_dir_url( __FILE__ ) . 'build/index.js', array('wp-blocks', 'wp-element','wp-editor', 'wp-i18n', 'wp-components'));
        wp_register_style( 'toms-pretty-list-style', plugin_dir_url( __FILE__ ) . 'build/index.css');

        wp_set_script_translations( 'toms-pretty-list-js', 'toms-pretty-list', plugin_dir_path( __FILE__ ) . '/languages' );

        register_block_type( 'tomsneddon-pretty-list/toms-pretty-list', array(
            'editor_script' => 'toms-pretty-list-js',
            'editor_style' => 'toms-pretty-list-style',
            'render_callback' => array($this, 'TomSPrettyListFrontendHTML')
        ) );
    }
    function TomSPrettyListFrontendHTML($attributes){

        if ( !is_admin() && has_block('tomsneddon-pretty-list/toms-pretty-list') ) {
            wp_enqueue_script( 'toms-pretty-list-frontendjs', plugin_dir_url( __FILE__ ) . 'build/frontend.js', array( 'wp-element' ,'wp-components') );
            
            //add something to js
            // wp_add_inline_script( 'toms-pretty-list-frontendjs', 'var FromPHP = ' . json_encode( array(
            //     'defaultImgUrl' => plugin_dir_url( __FILE__ ) . 'assets/img/default.png',
            // ) ), 'before' );

            wp_enqueue_style( 'toms-pretty-list-frontendstyle', plugin_dir_url( __FILE__ ) . 'build/frontend.css');
        }

        if( isset( $attributes['prettyListFontIconOnlineUrl'] ) &&
            !empty($attributes['prettyListFontIconOnlineUrl']) &&
            has_block('tomsneddon-pretty-list/toms-pretty-list') ) {
            wp_enqueue_style( 'toms-pretty-list-online-style', $attributes['prettyListFontIconOnlineUrl']);
        }

        $html = '';

        ob_start(); ?>
            <div class="tomsneddon">
                <div id="toms-pretty-list" class="toms-pretty-list">
                    <pre style="display: none; opacity: 0;"><?php echo wp_json_encode($attributes); ?></pre>
                </div>
            </div>
       <?php /* return ob_get_clean();*/
       $html = ob_get_contents();
       ob_end_clean();

       return $html ;
    }
}

$TomSPrettyList = new TomSPrettyList();
