/** ---------------------------------------------------------------------------
 * @module [ApgEdr]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240704
 * @version 0.2 APG 20240728 English comments
 * ----------------------------------------------------------------------------
 */

import {
    ApgUts_eLogType
} from "../enums/ApgUts_eLogType.ts";



/**
 * Definitions of a loggable event. It can be used for debugging and telemetry
 */
export interface ApgUts_ILogEvent {

    /**
     * Date and time of the event creation
     */
    created: Date;

    /**
     * Time of the server when the event was created
     */
    time: number;

    /**
     * Type of the event
     */
    type: ApgUts_eLogType;

    /** 
     * Name of the file in which the event was logged.
     * Usually is extracted using the import.meta.url
     */
    module: string;

    /**
     * Method or function in which the event was logged.
     * From the function we can extract the name
     */
    function: Function;

    /** 
     * Message associated to the event
     */
    message: string;
}



