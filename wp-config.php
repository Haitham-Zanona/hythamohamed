<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hythamohamed' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e,OcZya;h_ut~ .gJe^ px:tez8;3uNQ ZQg1_^j]I#xD/9$ug,w.qA7n*/][$y3' );
define( 'SECURE_AUTH_KEY',  'dS<,Yo9qJFDdjN?v-}lWRU6pfQMlBOz!qjK M]_[Q!Kbo~FwB+g9ca^!9`N&`cxP' );
define( 'LOGGED_IN_KEY',    'ke[2>J-n2+Q~{uKb{>pY^.lP4u[@;mY{zSjnPpG*qi~[!3>%s=do4k,ao+!n>VVZ' );
define( 'NONCE_KEY',        'g#Z)>UE+P~F: r:MHNYQTv  I?Er8*j%BPxS^gv1{9*iZrkCJ1||h4!UMo4$.o_@' );
define( 'AUTH_SALT',        '&T{I$k(~T8[IE _k.tEN89bTjm%#e::p)#n(eO&;d>Tt@C <~QH%>k%BXmJyyNk:' );
define( 'SECURE_AUTH_SALT', 'GFiRybZm?J+CyU9|gr;/<l/Plpq{<Sb=zf9a}~-wQIb$QL){&mA7)MXsyEO;>u%}' );
define( 'LOGGED_IN_SALT',   '-Q0c}C?.frsns7(5>}HcEljb#|F::^wDPc2e]uTX1sH<dRX^OQU4Kvy(>K$b4ys^' );
define( 'NONCE_SALT',       'K>{b!4WLy*$Vr_7&JE/8m_76mtuQ! 0EzW(<D;bYqr2zx8BSRA.G!JzA^L~ZUfYZ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
