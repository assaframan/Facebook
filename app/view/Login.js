/*
 * File: app/view/Login.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FB.view.Login', {
    extend: 'Ext.Container',

    config: {
        layout: {
            align: 'center',
            pack: 'center',
            type: 'vbox'
        },
        scrollable: 'vertical',
        cls: [
            'login-view'
        ],
        items: [
            {
                xtype: 'component',
                cls: [
                    'logo'
                ]
            },
            {
                xtype: 'formpanel',
                scrollable: false,
                items: [
                    {
                        xtype: 'component',
                        cls: [
                            'shadow'
                        ]
                    },
                    {
                        xtype: 'textfield',
                        cls: [
                            'email'
                        ],
                        name: 'email',
                        placeHolder: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        cls: [
                            'password'
                        ],
                        name: 'password',
                        placeHolder: 'Password'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: 'login-btn',
                text: 'Log In'
            },
            {
                xtype: 'button',
                cls: 'signup-btn',
                text: 'Sign Up for Facebook'
            },
            {
                xtype: 'button',
                cls: 'help-btn',
                text: 'Help Center'
            },
            {
                xtype: 'component',
                cls: [
                    'help-line'
                ]
            }
        ]
    }

});