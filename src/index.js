import './styles.css'
import compile from './initial-load.js'
require.context("./images/", true, /\.(png|svg|jpg|gif)$/);


compile();

