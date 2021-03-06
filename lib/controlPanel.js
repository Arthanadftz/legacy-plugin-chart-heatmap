"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const sortAxisChoices = [['alpha_asc', (0, _core.t)('Axis ascending')], ['alpha_desc', (0, _core.t)('Axis descending')], ['value_asc', (0, _core.t)('Metric ascending')], ['value_desc', (0, _core.t)('Metric descending')]];
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'all_columns_x',
      config: {
        type: 'SelectControl',
        label: 'X Axis',
        default: null,
        description: (0, _core.t)('Columns to display'),
        mapStateToProps: state => ({
          choices: (0, _chartControls.columnChoices)(state.datasource)
        }),
        validators: [_core.validateNonEmpty]
      }
    }, {
      name: 'all_columns_y',
      config: {
        type: 'SelectControl',
        label: 'Y Axis',
        default: null,
        description: (0, _core.t)('Columns to display'),
        mapStateToProps: state => ({
          choices: (0, _chartControls.columnChoices)(state.datasource)
        }),
        validators: [_core.validateNonEmpty]
      }
    }], ['metric'], ['adhoc_filters'], ['custom_filters'], ['row_limit']]
  }, {
    label: (0, _core.t)('Heatmap Options'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [['linear_color_scheme'], [{
      name: 'xscale_interval',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('XScale Interval'),
        renderTrigger: true,
        choices: (0, _chartControls.formatSelectOptionsForRange)(1, 50),
        default: '1',
        clearable: false,
        description: (0, _core.t)('Number of steps to take between ticks when displaying the X scale')
      }
    }, {
      name: 'yscale_interval',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('YScale Interval'),
        choices: (0, _chartControls.formatSelectOptionsForRange)(1, 50),
        default: '1',
        clearable: false,
        renderTrigger: true,
        description: (0, _core.t)('Number of steps to take between ticks when displaying the Y scale')
      }
    }], [{
      name: 'canvas_image_rendering',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Rendering'),
        renderTrigger: true,
        choices: [['pixelated', 'pixelated (Sharp)'], ['auto', 'auto (Smooth)']],
        default: 'pixelated',
        description: (0, _core.t)('image-rendering CSS attribute of the canvas object that ' + 'defines how the browser scales up the image')
      }
    }, {
      name: 'normalize_across',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Normalize Across'),
        choices: [['heatmap', 'heatmap'], ['x', 'x'], ['y', 'y']],
        default: 'heatmap',
        description: (0, _core.t)('Color will be rendered based on a ratio ' + 'of the cell against the sum of across this ' + 'criteria')
      }
    }], [{
      name: 'left_margin',
      config: {
        type: 'SelectControl',
        freeForm: true,
        clearable: false,
        label: (0, _core.t)('Left Margin'),
        choices: (0, _chartControls.formatSelectOptions)(['auto', 50, 75, 100, 125, 150, 200]),
        default: 'auto',
        renderTrigger: true,
        description: (0, _core.t)('Left margin, in pixels, allowing for more room for axis labels')
      }
    }, {
      name: 'bottom_margin',
      config: {
        type: 'SelectControl',
        clearable: false,
        freeForm: true,
        label: (0, _core.t)('Bottom Margin'),
        choices: (0, _chartControls.formatSelectOptions)(['auto', 50, 75, 100, 125, 150, 200]),
        default: 'auto',
        renderTrigger: true,
        description: (0, _core.t)('Bottom margin, in pixels, allowing for more room for axis labels')
      }
    }], [{
      name: 'y_axis_bounds',
      config: {
        type: 'BoundsControl',
        label: (0, _core.t)('Value bounds'),
        renderTrigger: true,
        default: [null, null],
        description: (0, _core.t)('Hard value bounds applied for color coding. Is only relevant ' + 'and applied when the normalization is applied against the whole heatmap.')
      }
    }, 'y_axis_format'], [{
      name: 'show_legend',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Legend'),
        renderTrigger: true,
        default: true,
        description: (0, _core.t)('Whether to display the legend (toggles)')
      }
    }, {
      name: 'show_perc',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Show percentage'),
        renderTrigger: true,
        description: (0, _core.t)('Whether to include the percentage in the tooltip'),
        default: true
      }
    }], [{
      name: 'show_values',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Show Values'),
        renderTrigger: true,
        default: false,
        description: (0, _core.t)('Whether to display the numerical values within the cells')
      }
    }, {
      name: 'normalized',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Normalized'),
        renderTrigger: true,
        description: (0, _core.t)('Whether to apply a normal distribution based on rank on the color scale'),
        default: false
      }
    }], [{
      name: 'sort_x_axis',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Sort X Axis'),
        choices: sortAxisChoices,
        clearable: false,
        default: 'alpha_asc'
      }
    }, {
      name: 'sort_y_axis',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Sort Y Axis'),
        choices: sortAxisChoices,
        clearable: false,
        default: 'alpha_asc'
      }
    }]]
  }],
  controlOverrides: {
    y_axis_format: {
      label: (0, _core.t)('Value Format')
    }
  }
};
exports.default = _default;