/* * *******************************************************************************************
 *  This file is part of the Oracle Service Cloud Accelerator Reference Integration set 
 *  published by Oracle under the Universal Permissive License (UPL), Version 1.0
 *  Copyright (c) 2017 Oracle and/or its affiliates. All rights reserved.
 ***********************************************************************************************
 *  Accelerator Package: Telephony and SMS Accelerator for Twilio
 *  link: http://www.oracle.com/technetwork/indexes/samplecode/accelerator-osvc-2525361.html
 *  OSvC release: 17D (November 2017)
 *  reference: 161212-000059
 *  date: Monday Oct 30 13:8:16 UTC 2017
 *  revision: rnw-17-11-fixes-releases
 * 
 *  SHA1: $Id: 00edf3987de4b6c2c79ed68a46a41e241e5ab140 $
 * *********************************************************************************************
 *  File: app_main.ts
 * ****************************************************************************************** */

/*global require*/
'use strict';
require.config({
    baseUrl: './',
    paths: {
        jquery: '../../ext-lib/jquery/dist/jquery.min'
    }
});

requirejs(['../scripts/client/ctiReportingAddin.js']);