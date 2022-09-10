'use strict';

/**
 * staticpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staticpage.staticpage');
