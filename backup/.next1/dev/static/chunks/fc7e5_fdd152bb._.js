(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/storages/globalConfig/globalConfig.ts
__turbopack_context__.s([
    "BASE64_REGEX",
    ()=>BASE64_REGEX,
    "BIC_REGEX",
    ()=>BIC_REGEX,
    "CUID2_REGEX",
    ()=>CUID2_REGEX,
    "DECIMAL_REGEX",
    ()=>DECIMAL_REGEX,
    "DIGITS_REGEX",
    ()=>DIGITS_REGEX,
    "EMAIL_REGEX",
    ()=>EMAIL_REGEX,
    "EMOJI_REGEX",
    ()=>EMOJI_REGEX,
    "HEXADECIMAL_REGEX",
    ()=>HEXADECIMAL_REGEX,
    "HEX_COLOR_REGEX",
    ()=>HEX_COLOR_REGEX,
    "IMEI_REGEX",
    ()=>IMEI_REGEX,
    "IPV4_REGEX",
    ()=>IPV4_REGEX,
    "IPV6_REGEX",
    ()=>IPV6_REGEX,
    "IP_REGEX",
    ()=>IP_REGEX,
    "ISO_DATE_REGEX",
    ()=>ISO_DATE_REGEX,
    "ISO_DATE_TIME_REGEX",
    ()=>ISO_DATE_TIME_REGEX,
    "ISO_TIMESTAMP_REGEX",
    ()=>ISO_TIMESTAMP_REGEX,
    "ISO_TIME_REGEX",
    ()=>ISO_TIME_REGEX,
    "ISO_TIME_SECOND_REGEX",
    ()=>ISO_TIME_SECOND_REGEX,
    "ISO_WEEK_REGEX",
    ()=>ISO_WEEK_REGEX,
    "MAC48_REGEX",
    ()=>MAC48_REGEX,
    "MAC64_REGEX",
    ()=>MAC64_REGEX,
    "MAC_REGEX",
    ()=>MAC_REGEX,
    "NANO_ID_REGEX",
    ()=>NANO_ID_REGEX,
    "OCTAL_REGEX",
    ()=>OCTAL_REGEX,
    "RFC_EMAIL_REGEX",
    ()=>RFC_EMAIL_REGEX,
    "SLUG_REGEX",
    ()=>SLUG_REGEX,
    "ULID_REGEX",
    ()=>ULID_REGEX,
    "UUID_REGEX",
    ()=>UUID_REGEX,
    "ValiError",
    ()=>ValiError,
    "_addIssue",
    ()=>_addIssue,
    "_getByteCount",
    ()=>_getByteCount,
    "_getGraphemeCount",
    ()=>_getGraphemeCount,
    "_getLastMetadata",
    ()=>_getLastMetadata,
    "_getStandardProps",
    ()=>_getStandardProps,
    "_getWordCount",
    ()=>_getWordCount,
    "_isLuhnAlgo",
    ()=>_isLuhnAlgo,
    "_isValidObjectKey",
    ()=>_isValidObjectKey,
    "_joinExpects",
    ()=>_joinExpects,
    "_stringify",
    ()=>_stringify,
    "any",
    ()=>any,
    "args",
    ()=>args,
    "argsAsync",
    ()=>argsAsync,
    "array",
    ()=>array,
    "arrayAsync",
    ()=>arrayAsync,
    "assert",
    ()=>assert,
    "awaitAsync",
    ()=>awaitAsync,
    "base64",
    ()=>base64,
    "bic",
    ()=>bic,
    "bigint",
    ()=>bigint,
    "blob",
    ()=>blob,
    "boolean",
    ()=>boolean,
    "brand",
    ()=>brand,
    "bytes",
    ()=>bytes,
    "check",
    ()=>check,
    "checkAsync",
    ()=>checkAsync,
    "checkItems",
    ()=>checkItems,
    "checkItemsAsync",
    ()=>checkItemsAsync,
    "config",
    ()=>config,
    "creditCard",
    ()=>creditCard,
    "cuid2",
    ()=>cuid2,
    "custom",
    ()=>custom,
    "customAsync",
    ()=>customAsync,
    "date",
    ()=>date,
    "decimal",
    ()=>decimal,
    "deleteGlobalConfig",
    ()=>deleteGlobalConfig,
    "deleteGlobalMessage",
    ()=>deleteGlobalMessage,
    "deleteSchemaMessage",
    ()=>deleteSchemaMessage,
    "deleteSpecificMessage",
    ()=>deleteSpecificMessage,
    "description",
    ()=>description,
    "digits",
    ()=>digits,
    "email",
    ()=>email,
    "emoji",
    ()=>emoji,
    "empty",
    ()=>empty,
    "endsWith",
    ()=>endsWith,
    "entries",
    ()=>entries,
    "entriesFromList",
    ()=>entriesFromList,
    "entriesFromObjects",
    ()=>entriesFromObjects,
    "enum",
    ()=>enum_,
    "enum_",
    ()=>enum_,
    "everyItem",
    ()=>everyItem,
    "exactOptional",
    ()=>exactOptional,
    "exactOptionalAsync",
    ()=>exactOptionalAsync,
    "examples",
    ()=>examples,
    "excludes",
    ()=>excludes,
    "fallback",
    ()=>fallback,
    "fallbackAsync",
    ()=>fallbackAsync,
    "file",
    ()=>file,
    "filterItems",
    ()=>filterItems,
    "findItem",
    ()=>findItem,
    "finite",
    ()=>finite,
    "flatten",
    ()=>flatten,
    "flavor",
    ()=>flavor,
    "forward",
    ()=>forward,
    "forwardAsync",
    ()=>forwardAsync,
    "function",
    ()=>function_,
    "function_",
    ()=>function_,
    "getDefault",
    ()=>getDefault,
    "getDefaults",
    ()=>getDefaults,
    "getDefaultsAsync",
    ()=>getDefaultsAsync,
    "getDescription",
    ()=>getDescription,
    "getDotPath",
    ()=>getDotPath,
    "getExamples",
    ()=>getExamples,
    "getFallback",
    ()=>getFallback,
    "getFallbacks",
    ()=>getFallbacks,
    "getFallbacksAsync",
    ()=>getFallbacksAsync,
    "getGlobalConfig",
    ()=>getGlobalConfig,
    "getGlobalMessage",
    ()=>getGlobalMessage,
    "getMetadata",
    ()=>getMetadata,
    "getSchemaMessage",
    ()=>getSchemaMessage,
    "getSpecificMessage",
    ()=>getSpecificMessage,
    "getTitle",
    ()=>getTitle,
    "graphemes",
    ()=>graphemes,
    "gtValue",
    ()=>gtValue,
    "hash",
    ()=>hash,
    "hexColor",
    ()=>hexColor,
    "hexadecimal",
    ()=>hexadecimal,
    "imei",
    ()=>imei,
    "includes",
    ()=>includes,
    "instance",
    ()=>instance,
    "integer",
    ()=>integer,
    "intersect",
    ()=>intersect,
    "intersectAsync",
    ()=>intersectAsync,
    "ip",
    ()=>ip,
    "ipv4",
    ()=>ipv4,
    "ipv6",
    ()=>ipv6,
    "is",
    ()=>is,
    "isOfKind",
    ()=>isOfKind,
    "isOfType",
    ()=>isOfType,
    "isValiError",
    ()=>isValiError,
    "isoDate",
    ()=>isoDate,
    "isoDateTime",
    ()=>isoDateTime,
    "isoTime",
    ()=>isoTime,
    "isoTimeSecond",
    ()=>isoTimeSecond,
    "isoTimestamp",
    ()=>isoTimestamp,
    "isoWeek",
    ()=>isoWeek,
    "keyof",
    ()=>keyof,
    "lazy",
    ()=>lazy,
    "lazyAsync",
    ()=>lazyAsync,
    "length",
    ()=>length,
    "literal",
    ()=>literal,
    "looseObject",
    ()=>looseObject,
    "looseObjectAsync",
    ()=>looseObjectAsync,
    "looseTuple",
    ()=>looseTuple,
    "looseTupleAsync",
    ()=>looseTupleAsync,
    "ltValue",
    ()=>ltValue,
    "mac",
    ()=>mac,
    "mac48",
    ()=>mac48,
    "mac64",
    ()=>mac64,
    "map",
    ()=>map,
    "mapAsync",
    ()=>mapAsync,
    "mapItems",
    ()=>mapItems,
    "maxBytes",
    ()=>maxBytes,
    "maxEntries",
    ()=>maxEntries,
    "maxGraphemes",
    ()=>maxGraphemes,
    "maxLength",
    ()=>maxLength,
    "maxSize",
    ()=>maxSize,
    "maxValue",
    ()=>maxValue,
    "maxWords",
    ()=>maxWords,
    "message",
    ()=>message,
    "metadata",
    ()=>metadata,
    "mimeType",
    ()=>mimeType,
    "minBytes",
    ()=>minBytes,
    "minEntries",
    ()=>minEntries,
    "minGraphemes",
    ()=>minGraphemes,
    "minLength",
    ()=>minLength,
    "minSize",
    ()=>minSize,
    "minValue",
    ()=>minValue,
    "minWords",
    ()=>minWords,
    "multipleOf",
    ()=>multipleOf,
    "nan",
    ()=>nan,
    "nanoid",
    ()=>nanoid,
    "never",
    ()=>never,
    "nonEmpty",
    ()=>nonEmpty,
    "nonNullable",
    ()=>nonNullable,
    "nonNullableAsync",
    ()=>nonNullableAsync,
    "nonNullish",
    ()=>nonNullish,
    "nonNullishAsync",
    ()=>nonNullishAsync,
    "nonOptional",
    ()=>nonOptional,
    "nonOptionalAsync",
    ()=>nonOptionalAsync,
    "normalize",
    ()=>normalize,
    "notBytes",
    ()=>notBytes,
    "notEntries",
    ()=>notEntries,
    "notGraphemes",
    ()=>notGraphemes,
    "notLength",
    ()=>notLength,
    "notSize",
    ()=>notSize,
    "notValue",
    ()=>notValue,
    "notValues",
    ()=>notValues,
    "notWords",
    ()=>notWords,
    "null",
    ()=>null_,
    "null_",
    ()=>null_,
    "nullable",
    ()=>nullable,
    "nullableAsync",
    ()=>nullableAsync,
    "nullish",
    ()=>nullish,
    "nullishAsync",
    ()=>nullishAsync,
    "number",
    ()=>number,
    "object",
    ()=>object,
    "objectAsync",
    ()=>objectAsync,
    "objectWithRest",
    ()=>objectWithRest,
    "objectWithRestAsync",
    ()=>objectWithRestAsync,
    "octal",
    ()=>octal,
    "omit",
    ()=>omit,
    "optional",
    ()=>optional,
    "optionalAsync",
    ()=>optionalAsync,
    "parse",
    ()=>parse,
    "parseAsync",
    ()=>parseAsync,
    "parseJson",
    ()=>parseJson,
    "parser",
    ()=>parser,
    "parserAsync",
    ()=>parserAsync,
    "partial",
    ()=>partial,
    "partialAsync",
    ()=>partialAsync,
    "partialCheck",
    ()=>partialCheck,
    "partialCheckAsync",
    ()=>partialCheckAsync,
    "pick",
    ()=>pick,
    "picklist",
    ()=>picklist,
    "pipe",
    ()=>pipe,
    "pipeAsync",
    ()=>pipeAsync,
    "promise",
    ()=>promise,
    "rawCheck",
    ()=>rawCheck,
    "rawCheckAsync",
    ()=>rawCheckAsync,
    "rawTransform",
    ()=>rawTransform,
    "rawTransformAsync",
    ()=>rawTransformAsync,
    "readonly",
    ()=>readonly,
    "record",
    ()=>record,
    "recordAsync",
    ()=>recordAsync,
    "reduceItems",
    ()=>reduceItems,
    "regex",
    ()=>regex,
    "required",
    ()=>required,
    "requiredAsync",
    ()=>requiredAsync,
    "returns",
    ()=>returns,
    "returnsAsync",
    ()=>returnsAsync,
    "rfcEmail",
    ()=>rfcEmail,
    "safeInteger",
    ()=>safeInteger,
    "safeParse",
    ()=>safeParse,
    "safeParseAsync",
    ()=>safeParseAsync,
    "safeParser",
    ()=>safeParser,
    "safeParserAsync",
    ()=>safeParserAsync,
    "set",
    ()=>set,
    "setAsync",
    ()=>setAsync,
    "setGlobalConfig",
    ()=>setGlobalConfig,
    "setGlobalMessage",
    ()=>setGlobalMessage,
    "setSchemaMessage",
    ()=>setSchemaMessage,
    "setSpecificMessage",
    ()=>setSpecificMessage,
    "size",
    ()=>size,
    "slug",
    ()=>slug,
    "someItem",
    ()=>someItem,
    "sortItems",
    ()=>sortItems,
    "startsWith",
    ()=>startsWith,
    "strictObject",
    ()=>strictObject,
    "strictObjectAsync",
    ()=>strictObjectAsync,
    "strictTuple",
    ()=>strictTuple,
    "strictTupleAsync",
    ()=>strictTupleAsync,
    "string",
    ()=>string,
    "stringifyJson",
    ()=>stringifyJson,
    "summarize",
    ()=>summarize,
    "symbol",
    ()=>symbol,
    "title",
    ()=>title,
    "toBigint",
    ()=>toBigint,
    "toBoolean",
    ()=>toBoolean,
    "toDate",
    ()=>toDate,
    "toLowerCase",
    ()=>toLowerCase,
    "toMaxValue",
    ()=>toMaxValue,
    "toMinValue",
    ()=>toMinValue,
    "toNumber",
    ()=>toNumber,
    "toString",
    ()=>toString,
    "toUpperCase",
    ()=>toUpperCase,
    "transform",
    ()=>transform,
    "transformAsync",
    ()=>transformAsync,
    "trim",
    ()=>trim,
    "trimEnd",
    ()=>trimEnd,
    "trimStart",
    ()=>trimStart,
    "tuple",
    ()=>tuple,
    "tupleAsync",
    ()=>tupleAsync,
    "tupleWithRest",
    ()=>tupleWithRest,
    "tupleWithRestAsync",
    ()=>tupleWithRestAsync,
    "ulid",
    ()=>ulid,
    "undefined",
    ()=>undefined_,
    "undefined_",
    ()=>undefined_,
    "undefinedable",
    ()=>undefinedable,
    "undefinedableAsync",
    ()=>undefinedableAsync,
    "union",
    ()=>union,
    "unionAsync",
    ()=>unionAsync,
    "unknown",
    ()=>unknown,
    "unwrap",
    ()=>unwrap,
    "url",
    ()=>url,
    "uuid",
    ()=>uuid,
    "value",
    ()=>value,
    "values",
    ()=>values,
    "variant",
    ()=>variant,
    "variantAsync",
    ()=>variantAsync,
    "void",
    ()=>void_,
    "void_",
    ()=>void_,
    "words",
    ()=>words
]);
let store$4;
/**
* Sets the global configuration.
*
* @param config The configuration.
*/ function setGlobalConfig(config$1) {
    store$4 = {
        ...store$4,
        ...config$1
    };
}
/**
* Returns the global configuration.
*
* @param config The config to merge.
*
* @returns The configuration.
*/ /* @__NO_SIDE_EFFECTS__ */ function getGlobalConfig(config$1) {
    return {
        lang: config$1?.lang ?? store$4?.lang,
        message: config$1?.message,
        abortEarly: config$1?.abortEarly ?? store$4?.abortEarly,
        abortPipeEarly: config$1?.abortPipeEarly ?? store$4?.abortPipeEarly
    };
}
/**
* Deletes the global configuration.
*/ function deleteGlobalConfig() {
    store$4 = void 0;
}
//#endregion
//#region src/storages/globalMessage/globalMessage.ts
let store$3;
/**
* Sets a global error message.
*
* @param message The error message.
* @param lang The language of the message.
*/ function setGlobalMessage(message$1, lang) {
    if (!store$3) store$3 = /* @__PURE__ */ new Map();
    store$3.set(lang, message$1);
}
/**
* Returns a global error message.
*
* @param lang The language of the message.
*
* @returns The error message.
*/ /* @__NO_SIDE_EFFECTS__ */ function getGlobalMessage(lang) {
    return store$3?.get(lang);
}
/**
* Deletes a global error message.
*
* @param lang The language of the message.
*/ function deleteGlobalMessage(lang) {
    store$3?.delete(lang);
}
//#endregion
//#region src/storages/schemaMessage/schemaMessage.ts
let store$2;
/**
* Sets a schema error message.
*
* @param message The error message.
* @param lang The language of the message.
*/ function setSchemaMessage(message$1, lang) {
    if (!store$2) store$2 = /* @__PURE__ */ new Map();
    store$2.set(lang, message$1);
}
/**
* Returns a schema error message.
*
* @param lang The language of the message.
*
* @returns The error message.
*/ /* @__NO_SIDE_EFFECTS__ */ function getSchemaMessage(lang) {
    return store$2?.get(lang);
}
/**
* Deletes a schema error message.
*
* @param lang The language of the message.
*/ function deleteSchemaMessage(lang) {
    store$2?.delete(lang);
}
//#endregion
//#region src/storages/specificMessage/specificMessage.ts
let store$1;
/**
* Sets a specific error message.
*
* @param reference The identifier reference.
* @param message The error message.
* @param lang The language of the message.
*/ function setSpecificMessage(reference, message$1, lang) {
    if (!store$1) store$1 = /* @__PURE__ */ new Map();
    if (!store$1.get(reference)) store$1.set(reference, /* @__PURE__ */ new Map());
    store$1.get(reference).set(lang, message$1);
}
/**
* Returns a specific error message.
*
* @param reference The identifier reference.
* @param lang The language of the message.
*
* @returns The error message.
*/ /* @__NO_SIDE_EFFECTS__ */ function getSpecificMessage(reference, lang) {
    return store$1?.get(reference)?.get(lang);
}
/**
* Deletes a specific error message.
*
* @param reference The identifier reference.
* @param lang The language of the message.
*/ function deleteSpecificMessage(reference, lang) {
    store$1?.get(reference)?.delete(lang);
}
//#endregion
//#region src/utils/_stringify/_stringify.ts
/**
* Stringifies an unknown input to a literal or type string.
*
* @param input The unknown input.
*
* @returns A literal or type string.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _stringify(input) {
    const type = typeof input;
    if (type === "string") return `"${input}"`;
    if (type === "number" || type === "bigint" || type === "boolean") return `${input}`;
    if (type === "object" || type === "function") return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
    return type;
}
//#endregion
//#region src/utils/_addIssue/_addIssue.ts
/**
* Adds an issue to the dataset.
*
* @param context The issue context.
* @param label The issue label.
* @param dataset The input dataset.
* @param config The configuration.
* @param other The optional props.
*
* @internal
*/ function _addIssue(context, label, dataset, config$1, other) {
    const input = other && "input" in other ? other.input : dataset.value;
    const expected = other?.expected ?? context.expects ?? null;
    const received = other?.received ?? /* @__PURE__ */ _stringify(input);
    const issue = {
        kind: context.kind,
        type: context.type,
        input,
        expected,
        received,
        message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
        requirement: context.requirement,
        path: other?.path,
        issues: other?.issues,
        lang: config$1.lang,
        abortEarly: config$1.abortEarly,
        abortPipeEarly: config$1.abortPipeEarly
    };
    const isSchema = context.kind === "schema";
    const message$1 = other?.message ?? context.message ?? /* @__PURE__ */ getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? /* @__PURE__ */ getSchemaMessage(issue.lang) : null) ?? config$1.message ?? /* @__PURE__ */ getGlobalMessage(issue.lang);
    if (message$1 !== void 0) issue.message = typeof message$1 === "function" ? message$1(issue) : message$1;
    if (isSchema) dataset.typed = false;
    if (dataset.issues) dataset.issues.push(issue);
    else dataset.issues = [
        issue
    ];
}
//#endregion
//#region src/utils/_getByteCount/_getByteCount.ts
let textEncoder;
/**
* Returns the byte count of the input.
*
* @param input The input to be measured.
*
* @returns The byte count.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _getByteCount(input) {
    if (!textEncoder) textEncoder = new TextEncoder();
    return textEncoder.encode(input).length;
}
//#endregion
//#region src/utils/_getGraphemeCount/_getGraphemeCount.ts
let segmenter;
/**
* Returns the grapheme count of the input.
*
* @param input The input to be measured.
*
* @returns The grapheme count.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _getGraphemeCount(input) {
    if (!segmenter) segmenter = new Intl.Segmenter();
    const segments = segmenter.segment(input);
    let count = 0;
    for (const _ of segments)count++;
    return count;
}
//#endregion
//#region src/utils/_getLastMetadata/_getLastMetadata.ts
/**
* Returns the last top-level value of a given metadata type from a schema
* using a breadth-first search that starts with the last item in the pipeline.
*
* @param schema The schema to search.
* @param type The metadata type.
*
* @returns The value, if any.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _getLastMetadata(schema, type) {
    if ("pipe" in schema) {
        const nestedSchemas = [];
        for(let index = schema.pipe.length - 1; index >= 0; index--){
            const item = schema.pipe[index];
            if (item.kind === "schema" && "pipe" in item) nestedSchemas.push(item);
            else if (item.kind === "metadata" && item.type === type) return item[type];
        }
        for (const nestedSchema of nestedSchemas){
            const result = /* @__PURE__ */ _getLastMetadata(nestedSchema, type);
            if (result !== void 0) return result;
        }
    }
}
//#endregion
//#region src/utils/_getStandardProps/_getStandardProps.ts
/**
* Returns the Standard Schema properties.
*
* @param context The schema context.
*
* @returns The Standard Schema properties.
*/ /* @__NO_SIDE_EFFECTS__ */ function _getStandardProps(context) {
    return {
        version: 1,
        vendor: "valibot",
        validate (value$1) {
            return context["~run"]({
                value: value$1
            }, /* @__PURE__ */ getGlobalConfig());
        }
    };
}
//#endregion
//#region src/utils/_getWordCount/_getWordCount.ts
let store;
/**
* Returns the word count of the input.
*
* @param locales The locales to be used.
* @param input The input to be measured.
*
* @returns The word count.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _getWordCount(locales, input) {
    if (!store) store = /* @__PURE__ */ new Map();
    if (!store.get(locales)) store.set(locales, new Intl.Segmenter(locales, {
        granularity: "word"
    }));
    const segments = store.get(locales).segment(input);
    let count = 0;
    for (const segment of segments)if (segment.isWordLike) count++;
    return count;
}
//#endregion
//#region src/utils/_isLuhnAlgo/_isLuhnAlgo.ts
/**
* Non-digit regex.
*/ const NON_DIGIT_REGEX = /\D/gu;
/**
* Checks whether a string with numbers corresponds to the luhn algorithm.
*
* @param input The input to be checked.
*
* @returns Whether input is valid.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _isLuhnAlgo(input) {
    const number$1 = input.replace(NON_DIGIT_REGEX, "");
    let length$1 = number$1.length;
    let bit = 1;
    let sum = 0;
    while(length$1){
        const value$1 = +number$1[--length$1];
        bit ^= 1;
        sum += bit ? [
            0,
            2,
            4,
            6,
            8,
            1,
            3,
            5,
            7,
            9
        ][value$1] : value$1;
    }
    return sum % 10 === 0;
}
//#endregion
//#region src/utils/_isValidObjectKey/_isValidObjectKey.ts
/**
* Disallows inherited object properties and prevents object prototype
* pollution by disallowing certain keys.
*
* @param object The object to check.
* @param key The key to check.
*
* @returns Whether the key is allowed.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _isValidObjectKey(object$1, key) {
    return Object.hasOwn(object$1, key) && key !== "__proto__" && key !== "prototype" && key !== "constructor";
}
//#endregion
//#region src/utils/_joinExpects/_joinExpects.ts
/**
* Joins multiple `expects` values with the given separator.
*
* @param values The `expects` values.
* @param separator The separator.
*
* @returns The joined `expects` property.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _joinExpects(values$1, separator) {
    const list = [
        ...new Set(values$1)
    ];
    if (list.length > 1) return `(${list.join(` ${separator} `)})`;
    return list[0] ?? "never";
}
//#endregion
//#region src/utils/entriesFromList/entriesFromList.ts
/**
* Creates an object entries definition from a list of keys and a schema.
*
* @param list A list of keys.
* @param schema The schema of the keys.
*
* @returns The object entries.
*/ /* @__NO_SIDE_EFFECTS__ */ function entriesFromList(list, schema) {
    const entries$1 = {};
    for (const key of list)entries$1[key] = schema;
    return entries$1;
}
//#endregion
//#region src/utils/entriesFromObjects/entriesFromObjects.ts
/* @__NO_SIDE_EFFECTS__ */ function entriesFromObjects(schemas) {
    const entries$1 = {};
    for (const schema of schemas)Object.assign(entries$1, schema.entries);
    return entries$1;
}
//#endregion
//#region src/utils/getDotPath/getDotPath.ts
/* @__NO_SIDE_EFFECTS__ */ function getDotPath(issue) {
    if (issue.path) {
        let key = "";
        for (const item of issue.path)if (typeof item.key === "string" || typeof item.key === "number") if (key) key += `.${item.key}`;
        else key += item.key;
        else return null;
        return key;
    }
    return null;
}
//#endregion
//#region src/utils/isOfKind/isOfKind.ts
/**
* A generic type guard to check the kind of an object.
*
* @param kind The kind to check for.
* @param object The object to check.
*
* @returns Whether it matches.
*/ /* @__NO_SIDE_EFFECTS__ */ function isOfKind(kind, object$1) {
    return object$1.kind === kind;
}
//#endregion
//#region src/utils/isOfType/isOfType.ts
/**
* A generic type guard to check the type of an object.
*
* @param type The type to check for.
* @param object The object to check.
*
* @returns Whether it matches.
*/ /* @__NO_SIDE_EFFECTS__ */ function isOfType(type, object$1) {
    return object$1.type === type;
}
//#endregion
//#region src/utils/isValiError/isValiError.ts
/**
* A type guard to check if an error is a ValiError.
*
* @param error The error to check.
*
* @returns Whether its a ValiError.
*/ /* @__NO_SIDE_EFFECTS__ */ function isValiError(error) {
    return error instanceof ValiError;
}
//#endregion
//#region src/utils/ValiError/ValiError.ts
/**
* A Valibot error with useful information.
*/ var ValiError = class extends Error {
    /**
	* Creates a Valibot error with useful information.
	*
	* @param issues The error issues.
	*/ constructor(issues){
        super(issues[0].message);
        this.name = "ValiError";
        this.issues = issues;
    }
};
//#endregion
//#region src/actions/args/args.ts
/* @__NO_SIDE_EFFECTS__ */ function args(schema) {
    return {
        kind: "transformation",
        type: "args",
        reference: args,
        async: false,
        schema,
        "~run" (dataset, config$1) {
            const func = dataset.value;
            dataset.value = (...args_)=>{
                const argsDataset = this.schema["~run"]({
                    value: args_
                }, config$1);
                if (argsDataset.issues) throw new ValiError(argsDataset.issues);
                return func(...argsDataset.value);
            };
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/args/argsAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function argsAsync(schema) {
    return {
        kind: "transformation",
        type: "args",
        reference: argsAsync,
        async: false,
        schema,
        "~run" (dataset, config$1) {
            const func = dataset.value;
            dataset.value = async (...args$1)=>{
                const argsDataset = await schema["~run"]({
                    value: args$1
                }, config$1);
                if (argsDataset.issues) throw new ValiError(argsDataset.issues);
                return func(...argsDataset.value);
            };
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/await/awaitAsync.ts
/**
* Creates an await transformation action.
*
* @returns An await action.
*/ /* @__NO_SIDE_EFFECTS__ */ function awaitAsync() {
    return {
        kind: "transformation",
        type: "await",
        reference: awaitAsync,
        async: true,
        async "~run" (dataset) {
            dataset.value = await dataset.value;
            return dataset;
        }
    };
}
//#endregion
//#region src/regex.ts
/**
* [Base64](https://en.wikipedia.org/wiki/Base64) regex.
*/ const BASE64_REGEX = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu;
/**
* [BIC](https://en.wikipedia.org/wiki/ISO_9362) regex.
*/ const BIC_REGEX = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u;
/**
* [Cuid2](https://github.com/paralleldrive/cuid2) regex.
*/ const CUID2_REGEX = /^[a-z][\da-z]*$/u;
/**
* [Decimal](https://en.wikipedia.org/wiki/Decimal) regex.
*/ const DECIMAL_REGEX = /^[+-]?(?:\d*\.)?\d+$/u;
/**
* [Digits](https://en.wikipedia.org/wiki/Numerical_digit) regex.
*/ const DIGITS_REGEX = /^\d+$/u;
/**
* [Email address](https://en.wikipedia.org/wiki/Email_address) regex.
*/ const EMAIL_REGEX = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;
/**
* Emoji regex from [emoji-regex-xs](https://github.com/slevithan/emoji-regex-xs) v1.0.0 (MIT license).
*
* Hint: We decided against the newer `/^\p{RGI_Emoji}+$/v` regex because it is
* not supported in older runtimes and does not match all emoji.
*/ const EMOJI_REGEX = /^(?:[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|(?![\p{Emoji_Modifier_Base}\u{1F1E6}-\u{1F1FF}])\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|(?![\p{Emoji_Modifier_Base}\u{1F1E6}-\u{1F1FF}])\p{Emoji_Presentation}))*)+$/u;
/**
* [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/ const HEXADECIMAL_REGEX = /^(?:0[hx])?[\da-fA-F]+$/u;
/**
* [Hex color](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/ const HEX_COLOR_REGEX = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u;
/**
* [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) regex.
*/ const IMEI_REGEX = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u;
/**
* [IPv4](https://en.wikipedia.org/wiki/IPv4) regex.
*/ const IPV4_REGEX = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u;
/**
* [IPv6](https://en.wikipedia.org/wiki/IPv6) regex.
*/ const IPV6_REGEX = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu;
/**
* [IP](https://en.wikipedia.org/wiki/IP_address) regex.
*/ const IP_REGEX = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date regex.
*/ const ISO_DATE_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time regex.
*/ const ISO_DATE_TIME_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time regex.
*/ const ISO_TIME_REGEX = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time with seconds regex.
*/ const ISO_TIME_SECOND_REGEX = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp regex.
*/ const ISO_TIMESTAMP_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z|[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u;
/**
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) week regex.
*/ const ISO_WEEK_REGEX = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u;
/**
* [MAC](https://en.wikipedia.org/wiki/MAC_address) 48 bit regex.
*/ const MAC48_REGEX = /^(?:[\da-f]{2}:){5}[\da-f]{2}$|^(?:[\da-f]{2}-){5}[\da-f]{2}$|^(?:[\da-f]{4}\.){2}[\da-f]{4}$/iu;
/**
* [MAC](https://en.wikipedia.org/wiki/MAC_address) 64 bit regex.
*/ const MAC64_REGEX = /^(?:[\da-f]{2}:){7}[\da-f]{2}$|^(?:[\da-f]{2}-){7}[\da-f]{2}$|^(?:[\da-f]{4}\.){3}[\da-f]{4}$|^(?:[\da-f]{4}:){3}[\da-f]{4}$/iu;
/**
* [MAC](https://en.wikipedia.org/wiki/MAC_address) regex.
*/ const MAC_REGEX = /^(?:[\da-f]{2}:){5}[\da-f]{2}$|^(?:[\da-f]{2}-){5}[\da-f]{2}$|^(?:[\da-f]{4}\.){2}[\da-f]{4}$|^(?:[\da-f]{2}:){7}[\da-f]{2}$|^(?:[\da-f]{2}-){7}[\da-f]{2}$|^(?:[\da-f]{4}\.){3}[\da-f]{4}$|^(?:[\da-f]{4}:){3}[\da-f]{4}$/iu;
/**
* [Nano ID](https://github.com/ai/nanoid) regex.
*/ const NANO_ID_REGEX = /^[\w-]+$/u;
/**
* [Octal](https://en.wikipedia.org/wiki/Octal) regex.
*/ const OCTAL_REGEX = /^(?:0o)?[0-7]+$/u;
/**
* [RFC 5322 email address](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1) regex.
*
* Hint: This regex was taken from the [HTML Living Standard Specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) and does not perfectly represent RFC 5322.
*/ const RFC_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/**
* [Slug](https://en.wikipedia.org/wiki/Clean_URL#Slug) regex.
*/ const SLUG_REGEX = /^[\da-z]+(?:[-_][\da-z]+)*$/u;
/**
* [ULID](https://github.com/ulid/spec) regex.
*
* Hint: We decided against the `i` flag for better JSON Schema compatibility.
*/ const ULID_REGEX = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u;
/**
* [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) regex.
*/ const UUID_REGEX = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
//#endregion
//#region src/actions/base64/base64.ts
/* @__NO_SIDE_EFFECTS__ */ function base64(message$1) {
    return {
        kind: "validation",
        type: "base64",
        reference: base64,
        async: false,
        expects: null,
        requirement: BASE64_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "Base64", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/bic/bic.ts
/* @__NO_SIDE_EFFECTS__ */ function bic(message$1) {
    return {
        kind: "validation",
        type: "bic",
        reference: bic,
        async: false,
        expects: null,
        requirement: BIC_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "BIC", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/brand/brand.ts
/**
* Creates a brand transformation action.
*
* @param name The brand name.
*
* @returns A brand action.
*/ /* @__NO_SIDE_EFFECTS__ */ function brand(name) {
    return {
        kind: "transformation",
        type: "brand",
        reference: brand,
        async: false,
        name,
        "~run" (dataset) {
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/bytes/bytes.ts
/* @__NO_SIDE_EFFECTS__ */ function bytes(requirement, message$1) {
    return {
        kind: "validation",
        type: "bytes",
        reference: bytes,
        async: false,
        expects: `${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const length$1 = /* @__PURE__ */ _getByteCount(dataset.value);
                if (length$1 !== this.requirement) _addIssue(this, "bytes", dataset, config$1, {
                    received: `${length$1}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/check/check.ts
/* @__NO_SIDE_EFFECTS__ */ function check(requirement, message$1) {
    return {
        kind: "validation",
        type: "check",
        reference: check,
        async: false,
        expects: null,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "input", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/check/checkAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function checkAsync(requirement, message$1) {
    return {
        kind: "validation",
        type: "check",
        reference: checkAsync,
        async: true,
        expects: null,
        requirement,
        message: message$1,
        async "~run" (dataset, config$1) {
            if (dataset.typed && !await this.requirement(dataset.value)) _addIssue(this, "input", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/checkItems/checkItems.ts
/* @__NO_SIDE_EFFECTS__ */ function checkItems(requirement, message$1) {
    return {
        kind: "validation",
        type: "check_items",
        reference: checkItems,
        async: false,
        expects: null,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) for(let index = 0; index < dataset.value.length; index++){
                const item = dataset.value[index];
                if (!this.requirement(item, index, dataset.value)) _addIssue(this, "item", dataset, config$1, {
                    input: item,
                    path: [
                        {
                            type: "array",
                            origin: "value",
                            input: dataset.value,
                            key: index,
                            value: item
                        }
                    ]
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/checkItems/checkItemsAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function checkItemsAsync(requirement, message$1) {
    return {
        kind: "validation",
        type: "check_items",
        reference: checkItemsAsync,
        async: true,
        expects: null,
        requirement,
        message: message$1,
        async "~run" (dataset, config$1) {
            if (dataset.typed) {
                const requirementResults = await Promise.all(dataset.value.map(this.requirement));
                for(let index = 0; index < dataset.value.length; index++)if (!requirementResults[index]) {
                    const item = dataset.value[index];
                    _addIssue(this, "item", dataset, config$1, {
                        input: item,
                        path: [
                            {
                                type: "array",
                                origin: "value",
                                input: dataset.value,
                                key: index,
                                value: item
                            }
                        ]
                    });
                }
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/creditCard/creditCard.ts
/**
* Credit card regex.
*/ const CREDIT_CARD_REGEX = /^(?:\d{14,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u;
/**
* Sanitize regex.
*/ const SANITIZE_REGEX = /[- ]/gu;
/**
* Provider regex list.
*/ const PROVIDER_REGEX_LIST = [
    /^3[47]\d{13}$/u,
    /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
    /^6(?:011|5\d{2})\d{12,15}$/u,
    /^(?:2131|1800|35\d{3})\d{11}$/u,
    /^5[1-5]\d{2}|(?:222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
    /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
    /^4\d{12}(?:\d{3,6})?$/u
];
/* @__NO_SIDE_EFFECTS__ */ function creditCard(message$1) {
    return {
        kind: "validation",
        type: "credit_card",
        reference: creditCard,
        async: false,
        expects: null,
        requirement (input) {
            let sanitized;
            return CREDIT_CARD_REGEX.test(input) && (sanitized = input.replace(SANITIZE_REGEX, "")) && PROVIDER_REGEX_LIST.some((regex$1)=>regex$1.test(sanitized)) && /* @__PURE__ */ _isLuhnAlgo(sanitized);
        },
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "credit card", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/cuid2/cuid2.ts
/* @__NO_SIDE_EFFECTS__ */ function cuid2(message$1) {
    return {
        kind: "validation",
        type: "cuid2",
        reference: cuid2,
        async: false,
        expects: null,
        requirement: CUID2_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "Cuid2", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/decimal/decimal.ts
/* @__NO_SIDE_EFFECTS__ */ function decimal(message$1) {
    return {
        kind: "validation",
        type: "decimal",
        reference: decimal,
        async: false,
        expects: null,
        requirement: DECIMAL_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "decimal", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/description/description.ts
/**
* Creates a description metadata action.
*
* @param description_ The description text.
*
* @returns A description action.
*/ /* @__NO_SIDE_EFFECTS__ */ function description(description_) {
    return {
        kind: "metadata",
        type: "description",
        reference: description,
        description: description_
    };
}
//#endregion
//#region src/actions/digits/digits.ts
/* @__NO_SIDE_EFFECTS__ */ function digits(message$1) {
    return {
        kind: "validation",
        type: "digits",
        reference: digits,
        async: false,
        expects: null,
        requirement: DIGITS_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "digits", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/email/email.ts
/* @__NO_SIDE_EFFECTS__ */ function email(message$1) {
    return {
        kind: "validation",
        type: "email",
        reference: email,
        expects: null,
        async: false,
        requirement: EMAIL_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "email", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/emoji/emoji.ts
/* @__NO_SIDE_EFFECTS__ */ function emoji(message$1) {
    return {
        kind: "validation",
        type: "emoji",
        reference: emoji,
        async: false,
        expects: null,
        requirement: EMOJI_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "emoji", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/empty/empty.ts
/* @__NO_SIDE_EFFECTS__ */ function empty(message$1) {
    return {
        kind: "validation",
        type: "empty",
        reference: empty,
        async: false,
        expects: "0",
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.length > 0) _addIssue(this, "length", dataset, config$1, {
                received: `${dataset.value.length}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/endsWith/endsWith.ts
/* @__NO_SIDE_EFFECTS__ */ function endsWith(requirement, message$1) {
    return {
        kind: "validation",
        type: "ends_with",
        reference: endsWith,
        async: false,
        expects: `"${requirement}"`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !dataset.value.endsWith(this.requirement)) _addIssue(this, "end", dataset, config$1, {
                received: `"${dataset.value.slice(-this.requirement.length)}"`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/entries/entries.ts
/* @__NO_SIDE_EFFECTS__ */ function entries(requirement, message$1) {
    return {
        kind: "validation",
        type: "entries",
        reference: entries,
        async: false,
        expects: `${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (!dataset.typed) return dataset;
            const count = Object.keys(dataset.value).length;
            if (dataset.typed && count !== this.requirement) _addIssue(this, "entries", dataset, config$1, {
                received: `${count}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/everyItem/everyItem.ts
/* @__NO_SIDE_EFFECTS__ */ function everyItem(requirement, message$1) {
    return {
        kind: "validation",
        type: "every_item",
        reference: everyItem,
        async: false,
        expects: null,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !dataset.value.every(this.requirement)) _addIssue(this, "item", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/examples/examples.ts
/**
* Creates an examples metadata action.
*
* @param examples_ The examples.
*
* @returns An examples action.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function examples(examples_) {
    return {
        kind: "metadata",
        type: "examples",
        reference: examples,
        examples: examples_
    };
}
//#endregion
//#region src/actions/excludes/excludes.ts
/* @__NO_SIDE_EFFECTS__ */ function excludes(requirement, message$1) {
    const received = /* @__PURE__ */ _stringify(requirement);
    return {
        kind: "validation",
        type: "excludes",
        reference: excludes,
        async: false,
        expects: `!${received}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.includes(this.requirement)) _addIssue(this, "content", dataset, config$1, {
                received
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/filterItems/filterItems.ts
/* @__NO_SIDE_EFFECTS__ */ function filterItems(operation) {
    return {
        kind: "transformation",
        type: "filter_items",
        reference: filterItems,
        async: false,
        operation,
        "~run" (dataset) {
            dataset.value = dataset.value.filter(this.operation);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/findItem/findItem.ts
/* @__NO_SIDE_EFFECTS__ */ function findItem(operation) {
    return {
        kind: "transformation",
        type: "find_item",
        reference: findItem,
        async: false,
        operation,
        "~run" (dataset) {
            dataset.value = dataset.value.find(this.operation);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/finite/finite.ts
/* @__NO_SIDE_EFFECTS__ */ function finite(message$1) {
    return {
        kind: "validation",
        type: "finite",
        reference: finite,
        async: false,
        expects: null,
        requirement: Number.isFinite,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "finite", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/flavor/flavor.ts
/**
* Creates a flavor transformation action.
*
* @param name The flavor name.
*
* @returns A flavor action.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function flavor(name) {
    return {
        kind: "transformation",
        type: "flavor",
        reference: flavor,
        async: false,
        name,
        "~run" (dataset) {
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/graphemes/graphemes.ts
/* @__NO_SIDE_EFFECTS__ */ function graphemes(requirement, message$1) {
    return {
        kind: "validation",
        type: "graphemes",
        reference: graphemes,
        async: false,
        expects: `${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getGraphemeCount(dataset.value);
                if (count !== this.requirement) _addIssue(this, "graphemes", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/gtValue/gtValue.ts
/* @__NO_SIDE_EFFECTS__ */ function gtValue(requirement, message$1) {
    return {
        kind: "validation",
        type: "gt_value",
        reference: gtValue,
        async: false,
        expects: `>${requirement instanceof Date ? requirement.toJSON() : /* @__PURE__ */ _stringify(requirement)}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !(dataset.value > this.requirement)) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/hash/hash.ts
/**
* Hash lengths object.
*/ const HASH_LENGTHS = {
    md4: 32,
    md5: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8,
    adler32: 8
};
/* @__NO_SIDE_EFFECTS__ */ function hash(types, message$1) {
    return {
        kind: "validation",
        type: "hash",
        reference: hash,
        expects: null,
        async: false,
        requirement: RegExp(types.map((type)=>`^[a-f0-9]{${HASH_LENGTHS[type]}}$`).join("|"), "iu"),
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "hash", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/hexadecimal/hexadecimal.ts
/* @__NO_SIDE_EFFECTS__ */ function hexadecimal(message$1) {
    return {
        kind: "validation",
        type: "hexadecimal",
        reference: hexadecimal,
        async: false,
        expects: null,
        requirement: HEXADECIMAL_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "hexadecimal", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/hexColor/hexColor.ts
/* @__NO_SIDE_EFFECTS__ */ function hexColor(message$1) {
    return {
        kind: "validation",
        type: "hex_color",
        reference: hexColor,
        async: false,
        expects: null,
        requirement: HEX_COLOR_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "hex color", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/imei/imei.ts
/* @__NO_SIDE_EFFECTS__ */ function imei(message$1) {
    return {
        kind: "validation",
        type: "imei",
        reference: imei,
        async: false,
        expects: null,
        requirement (input) {
            return IMEI_REGEX.test(input) && /* @__PURE__ */ _isLuhnAlgo(input);
        },
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "IMEI", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/includes/includes.ts
/* @__NO_SIDE_EFFECTS__ */ function includes(requirement, message$1) {
    const expects = /* @__PURE__ */ _stringify(requirement);
    return {
        kind: "validation",
        type: "includes",
        reference: includes,
        async: false,
        expects,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !dataset.value.includes(this.requirement)) _addIssue(this, "content", dataset, config$1, {
                received: `!${expects}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/integer/integer.ts
/* @__NO_SIDE_EFFECTS__ */ function integer(message$1) {
    return {
        kind: "validation",
        type: "integer",
        reference: integer,
        async: false,
        expects: null,
        requirement: Number.isInteger,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "integer", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/ip/ip.ts
/* @__NO_SIDE_EFFECTS__ */ function ip(message$1) {
    return {
        kind: "validation",
        type: "ip",
        reference: ip,
        async: false,
        expects: null,
        requirement: IP_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "IP", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/ipv4/ipv4.ts
/* @__NO_SIDE_EFFECTS__ */ function ipv4(message$1) {
    return {
        kind: "validation",
        type: "ipv4",
        reference: ipv4,
        async: false,
        expects: null,
        requirement: IPV4_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "IPv4", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/ipv6/ipv6.ts
/* @__NO_SIDE_EFFECTS__ */ function ipv6(message$1) {
    return {
        kind: "validation",
        type: "ipv6",
        reference: ipv6,
        async: false,
        expects: null,
        requirement: IPV6_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "IPv6", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/isoDate/isoDate.ts
/* @__NO_SIDE_EFFECTS__ */ function isoDate(message$1) {
    return {
        kind: "validation",
        type: "iso_date",
        reference: isoDate,
        async: false,
        expects: null,
        requirement: ISO_DATE_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "date", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/isoDateTime/isoDateTime.ts
/* @__NO_SIDE_EFFECTS__ */ function isoDateTime(message$1) {
    return {
        kind: "validation",
        type: "iso_date_time",
        reference: isoDateTime,
        async: false,
        expects: null,
        requirement: ISO_DATE_TIME_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "date-time", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/isoTime/isoTime.ts
/* @__NO_SIDE_EFFECTS__ */ function isoTime(message$1) {
    return {
        kind: "validation",
        type: "iso_time",
        reference: isoTime,
        async: false,
        expects: null,
        requirement: ISO_TIME_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "time", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/isoTimeSecond/isoTimeSecond.ts
/* @__NO_SIDE_EFFECTS__ */ function isoTimeSecond(message$1) {
    return {
        kind: "validation",
        type: "iso_time_second",
        reference: isoTimeSecond,
        async: false,
        expects: null,
        requirement: ISO_TIME_SECOND_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "time-second", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/isoTimestamp/isoTimestamp.ts
/* @__NO_SIDE_EFFECTS__ */ function isoTimestamp(message$1) {
    return {
        kind: "validation",
        type: "iso_timestamp",
        reference: isoTimestamp,
        async: false,
        expects: null,
        requirement: ISO_TIMESTAMP_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "timestamp", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/isoWeek/isoWeek.ts
/* @__NO_SIDE_EFFECTS__ */ function isoWeek(message$1) {
    return {
        kind: "validation",
        type: "iso_week",
        reference: isoWeek,
        async: false,
        expects: null,
        requirement: ISO_WEEK_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "week", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/length/length.ts
/* @__NO_SIDE_EFFECTS__ */ function length(requirement, message$1) {
    return {
        kind: "validation",
        type: "length",
        reference: length,
        async: false,
        expects: `${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.length !== this.requirement) _addIssue(this, "length", dataset, config$1, {
                received: `${dataset.value.length}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/ltValue/ltValue.ts
/* @__NO_SIDE_EFFECTS__ */ function ltValue(requirement, message$1) {
    return {
        kind: "validation",
        type: "lt_value",
        reference: ltValue,
        async: false,
        expects: `<${requirement instanceof Date ? requirement.toJSON() : /* @__PURE__ */ _stringify(requirement)}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !(dataset.value < this.requirement)) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/mac/mac.ts
/* @__NO_SIDE_EFFECTS__ */ function mac(message$1) {
    return {
        kind: "validation",
        type: "mac",
        reference: mac,
        async: false,
        expects: null,
        requirement: MAC_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "MAC", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/mac48/mac48.ts
/* @__NO_SIDE_EFFECTS__ */ function mac48(message$1) {
    return {
        kind: "validation",
        type: "mac48",
        reference: mac48,
        async: false,
        expects: null,
        requirement: MAC48_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "48-bit MAC", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/mac64/mac64.ts
/* @__NO_SIDE_EFFECTS__ */ function mac64(message$1) {
    return {
        kind: "validation",
        type: "mac64",
        reference: mac64,
        async: false,
        expects: null,
        requirement: MAC64_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "64-bit MAC", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/mapItems/mapItems.ts
/* @__NO_SIDE_EFFECTS__ */ function mapItems(operation) {
    return {
        kind: "transformation",
        type: "map_items",
        reference: mapItems,
        async: false,
        operation,
        "~run" (dataset) {
            dataset.value = dataset.value.map(this.operation);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/maxBytes/maxBytes.ts
/* @__NO_SIDE_EFFECTS__ */ function maxBytes(requirement, message$1) {
    return {
        kind: "validation",
        type: "max_bytes",
        reference: maxBytes,
        async: false,
        expects: `<=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const length$1 = /* @__PURE__ */ _getByteCount(dataset.value);
                if (length$1 > this.requirement) _addIssue(this, "bytes", dataset, config$1, {
                    received: `${length$1}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/maxEntries/maxEntries.ts
/* @__NO_SIDE_EFFECTS__ */ function maxEntries(requirement, message$1) {
    return {
        kind: "validation",
        type: "max_entries",
        reference: maxEntries,
        async: false,
        expects: `<=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (!dataset.typed) return dataset;
            const count = Object.keys(dataset.value).length;
            if (dataset.typed && count > this.requirement) _addIssue(this, "entries", dataset, config$1, {
                received: `${count}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/maxGraphemes/maxGraphemes.ts
/* @__NO_SIDE_EFFECTS__ */ function maxGraphemes(requirement, message$1) {
    return {
        kind: "validation",
        type: "max_graphemes",
        reference: maxGraphemes,
        async: false,
        expects: `<=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getGraphemeCount(dataset.value);
                if (count > this.requirement) _addIssue(this, "graphemes", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/maxLength/maxLength.ts
/* @__NO_SIDE_EFFECTS__ */ function maxLength(requirement, message$1) {
    return {
        kind: "validation",
        type: "max_length",
        reference: maxLength,
        async: false,
        expects: `<=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.length > this.requirement) _addIssue(this, "length", dataset, config$1, {
                received: `${dataset.value.length}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/maxSize/maxSize.ts
/* @__NO_SIDE_EFFECTS__ */ function maxSize(requirement, message$1) {
    return {
        kind: "validation",
        type: "max_size",
        reference: maxSize,
        async: false,
        expects: `<=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.size > this.requirement) _addIssue(this, "size", dataset, config$1, {
                received: `${dataset.value.size}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/maxValue/maxValue.ts
/* @__NO_SIDE_EFFECTS__ */ function maxValue(requirement, message$1) {
    return {
        kind: "validation",
        type: "max_value",
        reference: maxValue,
        async: false,
        expects: `<=${requirement instanceof Date ? requirement.toJSON() : /* @__PURE__ */ _stringify(requirement)}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !(dataset.value <= this.requirement)) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/maxWords/maxWords.ts
/* @__NO_SIDE_EFFECTS__ */ function maxWords(locales, requirement, message$1) {
    return {
        kind: "validation",
        type: "max_words",
        reference: maxWords,
        async: false,
        expects: `<=${requirement}`,
        locales,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getWordCount(this.locales, dataset.value);
                if (count > this.requirement) _addIssue(this, "words", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/metadata/metadata.ts
/**
* Creates a custom metadata action.
*
* @param metadata_ The metadata object.
*
* @returns A metadata action.
*/ /* @__NO_SIDE_EFFECTS__ */ function metadata(metadata_) {
    return {
        kind: "metadata",
        type: "metadata",
        reference: metadata,
        metadata: metadata_
    };
}
//#endregion
//#region src/actions/mimeType/mimeType.ts
/* @__NO_SIDE_EFFECTS__ */ function mimeType(requirement, message$1) {
    return {
        kind: "validation",
        type: "mime_type",
        reference: mimeType,
        async: false,
        expects: /* @__PURE__ */ _joinExpects(requirement.map((option)=>`"${option}"`), "|"),
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.includes(dataset.value.type)) _addIssue(this, "MIME type", dataset, config$1, {
                received: `"${dataset.value.type}"`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/minBytes/minBytes.ts
/* @__NO_SIDE_EFFECTS__ */ function minBytes(requirement, message$1) {
    return {
        kind: "validation",
        type: "min_bytes",
        reference: minBytes,
        async: false,
        expects: `>=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const length$1 = /* @__PURE__ */ _getByteCount(dataset.value);
                if (length$1 < this.requirement) _addIssue(this, "bytes", dataset, config$1, {
                    received: `${length$1}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/minEntries/minEntries.ts
/* @__NO_SIDE_EFFECTS__ */ function minEntries(requirement, message$1) {
    return {
        kind: "validation",
        type: "min_entries",
        reference: minEntries,
        async: false,
        expects: `>=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (!dataset.typed) return dataset;
            const count = Object.keys(dataset.value).length;
            if (dataset.typed && count < this.requirement) _addIssue(this, "entries", dataset, config$1, {
                received: `${count}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/minGraphemes/minGraphemes.ts
/* @__NO_SIDE_EFFECTS__ */ function minGraphemes(requirement, message$1) {
    return {
        kind: "validation",
        type: "min_graphemes",
        reference: minGraphemes,
        async: false,
        expects: `>=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getGraphemeCount(dataset.value);
                if (count < this.requirement) _addIssue(this, "graphemes", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/minLength/minLength.ts
/* @__NO_SIDE_EFFECTS__ */ function minLength(requirement, message$1) {
    return {
        kind: "validation",
        type: "min_length",
        reference: minLength,
        async: false,
        expects: `>=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.length < this.requirement) _addIssue(this, "length", dataset, config$1, {
                received: `${dataset.value.length}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/minSize/minSize.ts
/* @__NO_SIDE_EFFECTS__ */ function minSize(requirement, message$1) {
    return {
        kind: "validation",
        type: "min_size",
        reference: minSize,
        async: false,
        expects: `>=${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.size < this.requirement) _addIssue(this, "size", dataset, config$1, {
                received: `${dataset.value.size}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/minValue/minValue.ts
/* @__NO_SIDE_EFFECTS__ */ function minValue(requirement, message$1) {
    return {
        kind: "validation",
        type: "min_value",
        reference: minValue,
        async: false,
        expects: `>=${requirement instanceof Date ? requirement.toJSON() : /* @__PURE__ */ _stringify(requirement)}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !(dataset.value >= this.requirement)) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/minWords/minWords.ts
/* @__NO_SIDE_EFFECTS__ */ function minWords(locales, requirement, message$1) {
    return {
        kind: "validation",
        type: "min_words",
        reference: minWords,
        async: false,
        expects: `>=${requirement}`,
        locales,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getWordCount(this.locales, dataset.value);
                if (count < this.requirement) _addIssue(this, "words", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/multipleOf/multipleOf.ts
/* @__NO_SIDE_EFFECTS__ */ function multipleOf(requirement, message$1) {
    return {
        kind: "validation",
        type: "multiple_of",
        reference: multipleOf,
        async: false,
        expects: `%${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value % this.requirement != 0) _addIssue(this, "multiple", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/nanoid/nanoid.ts
/* @__NO_SIDE_EFFECTS__ */ function nanoid(message$1) {
    return {
        kind: "validation",
        type: "nanoid",
        reference: nanoid,
        async: false,
        expects: null,
        requirement: NANO_ID_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "Nano ID", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/nonEmpty/nonEmpty.ts
/* @__NO_SIDE_EFFECTS__ */ function nonEmpty(message$1) {
    return {
        kind: "validation",
        type: "non_empty",
        reference: nonEmpty,
        async: false,
        expects: "!0",
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.length === 0) _addIssue(this, "length", dataset, config$1, {
                received: "0"
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/normalize/normalize.ts
/* @__NO_SIDE_EFFECTS__ */ function normalize(form) {
    return {
        kind: "transformation",
        type: "normalize",
        reference: normalize,
        async: false,
        form,
        "~run" (dataset) {
            dataset.value = dataset.value.normalize(this.form);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notBytes/notBytes.ts
/* @__NO_SIDE_EFFECTS__ */ function notBytes(requirement, message$1) {
    return {
        kind: "validation",
        type: "not_bytes",
        reference: notBytes,
        async: false,
        expects: `!${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const length$1 = /* @__PURE__ */ _getByteCount(dataset.value);
                if (length$1 === this.requirement) _addIssue(this, "bytes", dataset, config$1, {
                    received: `${length$1}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notEntries/notEntries.ts
/* @__NO_SIDE_EFFECTS__ */ function notEntries(requirement, message$1) {
    return {
        kind: "validation",
        type: "not_entries",
        reference: notEntries,
        async: false,
        expects: `!${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (!dataset.typed) return dataset;
            const count = Object.keys(dataset.value).length;
            if (dataset.typed && count === this.requirement) _addIssue(this, "entries", dataset, config$1, {
                received: `${count}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notGraphemes/notGraphemes.ts
/* @__NO_SIDE_EFFECTS__ */ function notGraphemes(requirement, message$1) {
    return {
        kind: "validation",
        type: "not_graphemes",
        reference: notGraphemes,
        async: false,
        expects: `!${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getGraphemeCount(dataset.value);
                if (count === this.requirement) _addIssue(this, "graphemes", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notLength/notLength.ts
/* @__NO_SIDE_EFFECTS__ */ function notLength(requirement, message$1) {
    return {
        kind: "validation",
        type: "not_length",
        reference: notLength,
        async: false,
        expects: `!${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.length === this.requirement) _addIssue(this, "length", dataset, config$1, {
                received: `${dataset.value.length}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notSize/notSize.ts
/* @__NO_SIDE_EFFECTS__ */ function notSize(requirement, message$1) {
    return {
        kind: "validation",
        type: "not_size",
        reference: notSize,
        async: false,
        expects: `!${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.size === this.requirement) _addIssue(this, "size", dataset, config$1, {
                received: `${dataset.value.size}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notValue/notValue.ts
/* @__NO_SIDE_EFFECTS__ */ function notValue(requirement, message$1) {
    return {
        kind: "validation",
        type: "not_value",
        reference: notValue,
        async: false,
        expects: requirement instanceof Date ? `!${requirement.toJSON()}` : `!${/* @__PURE__ */ _stringify(requirement)}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && this.requirement <= dataset.value && this.requirement >= dataset.value) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notValues/notValues.ts
/* @__NO_SIDE_EFFECTS__ */ function notValues(requirement, message$1) {
    return {
        kind: "validation",
        type: "not_values",
        reference: notValues,
        async: false,
        expects: `!${/* @__PURE__ */ _joinExpects(requirement.map((value$1)=>value$1 instanceof Date ? value$1.toJSON() : /* @__PURE__ */ _stringify(value$1)), "|")}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && this.requirement.some((value$1)=>value$1 <= dataset.value && value$1 >= dataset.value)) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/notWords/notWords.ts
/* @__NO_SIDE_EFFECTS__ */ function notWords(locales, requirement, message$1) {
    return {
        kind: "validation",
        type: "not_words",
        reference: notWords,
        async: false,
        expects: `!${requirement}`,
        locales,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getWordCount(this.locales, dataset.value);
                if (count === this.requirement) _addIssue(this, "words", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/octal/octal.ts
/* @__NO_SIDE_EFFECTS__ */ function octal(message$1) {
    return {
        kind: "validation",
        type: "octal",
        reference: octal,
        async: false,
        expects: null,
        requirement: OCTAL_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "octal", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/parseJson/parseJson.ts
/* @__NO_SIDE_EFFECTS__ */ function parseJson(config$1, message$1) {
    return {
        kind: "transformation",
        type: "parse_json",
        reference: parseJson,
        config: config$1,
        message: message$1,
        async: false,
        "~run" (dataset, config$2) {
            try {
                dataset.value = JSON.parse(dataset.value, this.config?.reviver);
            } catch (error) {
                if (error instanceof Error) {
                    _addIssue(this, "JSON", dataset, config$2, {
                        received: `"${error.message}"`
                    });
                    dataset.typed = false;
                } else throw error;
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/partialCheck/utils/_isPartiallyTyped/_isPartiallyTyped.ts
/**
* Checks if a dataset is partially typed.
*
* @param dataset The dataset to check.
* @param paths The paths to check.
*
* @returns Whether it is partially typed.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _isPartiallyTyped(dataset, paths) {
    if (dataset.issues) for (const path of paths)for (const issue of dataset.issues){
        let typed = false;
        const bound = Math.min(path.length, issue.path?.length ?? 0);
        for(let index = 0; index < bound; index++)if (path[index] !== issue.path[index].key && (path[index] !== "$" || issue.path[index].type !== "array")) {
            typed = true;
            break;
        }
        if (!typed) return false;
    }
    return true;
}
//#endregion
//#region src/actions/partialCheck/partialCheck.ts
/* @__NO_SIDE_EFFECTS__ */ function partialCheck(paths, requirement, message$1) {
    return {
        kind: "validation",
        type: "partial_check",
        reference: partialCheck,
        async: false,
        expects: null,
        paths,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if ((dataset.typed || /* @__PURE__ */ _isPartiallyTyped(dataset, paths)) && !this.requirement(dataset.value)) _addIssue(this, "input", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/partialCheck/partialCheckAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function partialCheckAsync(paths, requirement, message$1) {
    return {
        kind: "validation",
        type: "partial_check",
        reference: partialCheckAsync,
        async: true,
        expects: null,
        paths,
        requirement,
        message: message$1,
        async "~run" (dataset, config$1) {
            if ((dataset.typed || /* @__PURE__ */ _isPartiallyTyped(dataset, paths)) && !await this.requirement(dataset.value)) _addIssue(this, "input", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/rawCheck/rawCheck.ts
/**
* Creates a raw check validation action.
*
* @param action The validation action.
*
* @returns A raw check action.
*/ /* @__NO_SIDE_EFFECTS__ */ function rawCheck(action) {
    return {
        kind: "validation",
        type: "raw_check",
        reference: rawCheck,
        async: false,
        expects: null,
        "~run" (dataset, config$1) {
            action({
                dataset,
                config: config$1,
                addIssue: (info)=>_addIssue(this, info?.label ?? "input", dataset, config$1, info)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/rawCheck/rawCheckAsync.ts
/**
* Creates a raw check validation action.
*
* @param action The validation action.
*
* @returns A raw check action.
*/ /* @__NO_SIDE_EFFECTS__ */ function rawCheckAsync(action) {
    return {
        kind: "validation",
        type: "raw_check",
        reference: rawCheckAsync,
        async: true,
        expects: null,
        async "~run" (dataset, config$1) {
            await action({
                dataset,
                config: config$1,
                addIssue: (info)=>_addIssue(this, info?.label ?? "input", dataset, config$1, info)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/rawTransform/rawTransform.ts
/**
* Creates a raw transformation action.
*
* @param action The transformation action.
*
* @returns A raw transform action.
*/ /* @__NO_SIDE_EFFECTS__ */ function rawTransform(action) {
    return {
        kind: "transformation",
        type: "raw_transform",
        reference: rawTransform,
        async: false,
        "~run" (dataset, config$1) {
            const output = action({
                dataset,
                config: config$1,
                addIssue: (info)=>_addIssue(this, info?.label ?? "input", dataset, config$1, info),
                NEVER: null
            });
            if (dataset.issues) dataset.typed = false;
            else dataset.value = output;
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/rawTransform/rawTransformAsync.ts
/**
* Creates a raw transformation action.
*
* @param action The transformation action.
*
* @returns A raw transform action.
*/ /* @__NO_SIDE_EFFECTS__ */ function rawTransformAsync(action) {
    return {
        kind: "transformation",
        type: "raw_transform",
        reference: rawTransformAsync,
        async: true,
        async "~run" (dataset, config$1) {
            const output = await action({
                dataset,
                config: config$1,
                addIssue: (info)=>_addIssue(this, info?.label ?? "input", dataset, config$1, info),
                NEVER: null
            });
            if (dataset.issues) dataset.typed = false;
            else dataset.value = output;
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/readonly/readonly.ts
/* @__NO_SIDE_EFFECTS__ */ function readonly() {
    return {
        kind: "transformation",
        type: "readonly",
        reference: readonly,
        async: false,
        "~run" (dataset) {
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/reduceItems/reduceItems.ts
/* @__NO_SIDE_EFFECTS__ */ function reduceItems(operation, initial) {
    return {
        kind: "transformation",
        type: "reduce_items",
        reference: reduceItems,
        async: false,
        operation,
        initial,
        "~run" (dataset) {
            dataset.value = dataset.value.reduce(this.operation, this.initial);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/regex/regex.ts
/* @__NO_SIDE_EFFECTS__ */ function regex(requirement, message$1) {
    return {
        kind: "validation",
        type: "regex",
        reference: regex,
        async: false,
        expects: `${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "format", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/returns/returns.ts
/* @__NO_SIDE_EFFECTS__ */ function returns(schema) {
    return {
        kind: "transformation",
        type: "returns",
        reference: returns,
        async: false,
        schema,
        "~run" (dataset, config$1) {
            const func = dataset.value;
            dataset.value = (...args_)=>{
                const returnsDataset = this.schema["~run"]({
                    value: func(...args_)
                }, config$1);
                if (returnsDataset.issues) throw new ValiError(returnsDataset.issues);
                return returnsDataset.value;
            };
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/returns/returnsAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function returnsAsync(schema) {
    return {
        kind: "transformation",
        type: "returns",
        reference: returnsAsync,
        async: false,
        schema,
        "~run" (dataset, config$1) {
            const func = dataset.value;
            dataset.value = async (...args_)=>{
                const returnsDataset = await this.schema["~run"]({
                    value: await func(...args_)
                }, config$1);
                if (returnsDataset.issues) throw new ValiError(returnsDataset.issues);
                return returnsDataset.value;
            };
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/rfcEmail/rfcEmail.ts
/* @__NO_SIDE_EFFECTS__ */ function rfcEmail(message$1) {
    return {
        kind: "validation",
        type: "rfc_email",
        reference: rfcEmail,
        expects: null,
        async: false,
        requirement: RFC_EMAIL_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "email", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/safeInteger/safeInteger.ts
/* @__NO_SIDE_EFFECTS__ */ function safeInteger(message$1) {
    return {
        kind: "validation",
        type: "safe_integer",
        reference: safeInteger,
        async: false,
        expects: null,
        requirement: Number.isSafeInteger,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "safe integer", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/size/size.ts
/* @__NO_SIDE_EFFECTS__ */ function size(requirement, message$1) {
    return {
        kind: "validation",
        type: "size",
        reference: size,
        async: false,
        expects: `${requirement}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && dataset.value.size !== this.requirement) _addIssue(this, "size", dataset, config$1, {
                received: `${dataset.value.size}`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/slug/slug.ts
/* @__NO_SIDE_EFFECTS__ */ function slug(message$1) {
    return {
        kind: "validation",
        type: "slug",
        reference: slug,
        async: false,
        expects: null,
        requirement: SLUG_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "slug", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/someItem/someItem.ts
/* @__NO_SIDE_EFFECTS__ */ function someItem(requirement, message$1) {
    return {
        kind: "validation",
        type: "some_item",
        reference: someItem,
        async: false,
        expects: null,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !dataset.value.some(this.requirement)) _addIssue(this, "item", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/sortItems/sortItems.ts
/* @__NO_SIDE_EFFECTS__ */ function sortItems(operation) {
    return {
        kind: "transformation",
        type: "sort_items",
        reference: sortItems,
        async: false,
        operation,
        "~run" (dataset) {
            dataset.value = dataset.value.sort(this.operation);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/startsWith/startsWith.ts
/* @__NO_SIDE_EFFECTS__ */ function startsWith(requirement, message$1) {
    return {
        kind: "validation",
        type: "starts_with",
        reference: startsWith,
        async: false,
        expects: `"${requirement}"`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !dataset.value.startsWith(this.requirement)) _addIssue(this, "start", dataset, config$1, {
                received: `"${dataset.value.slice(0, this.requirement.length)}"`
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/stringifyJson/stringifyJson.ts
/* @__NO_SIDE_EFFECTS__ */ function stringifyJson(config$1, message$1) {
    return {
        kind: "transformation",
        type: "stringify_json",
        reference: stringifyJson,
        message: message$1,
        config: config$1,
        async: false,
        "~run" (dataset, config$2) {
            try {
                const output = JSON.stringify(dataset.value, this.config?.replacer, this.config?.space);
                if (output === void 0) {
                    _addIssue(this, "JSON", dataset, config$2);
                    dataset.typed = false;
                }
                dataset.value = output;
            } catch (error) {
                if (error instanceof Error) {
                    _addIssue(this, "JSON", dataset, config$2, {
                        received: `"${error.message}"`
                    });
                    dataset.typed = false;
                } else throw error;
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/title/title.ts
/**
* Creates a title metadata action.
*
* @param title_ The title text.
*
* @returns A title action.
*/ /* @__NO_SIDE_EFFECTS__ */ function title(title_) {
    return {
        kind: "metadata",
        type: "title",
        reference: title,
        title: title_
    };
}
//#endregion
//#region src/actions/toBigint/toBigint.ts
/* @__NO_SIDE_EFFECTS__ */ function toBigint(message$1) {
    return {
        kind: "transformation",
        type: "to_bigint",
        reference: toBigint,
        async: false,
        message: message$1,
        "~run" (dataset, config$1) {
            try {
                dataset.value = BigInt(dataset.value);
            } catch  {
                _addIssue(this, "bigint", dataset, config$1);
                dataset.typed = false;
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toBoolean/toBoolean.ts
/**
* Creates a to boolean transformation action.
*
* @returns A to boolean action.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function toBoolean() {
    return {
        kind: "transformation",
        type: "to_boolean",
        reference: toBoolean,
        async: false,
        "~run" (dataset) {
            dataset.value = Boolean(dataset.value);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toDate/toDate.ts
/* @__NO_SIDE_EFFECTS__ */ function toDate(message$1) {
    return {
        kind: "transformation",
        type: "to_date",
        reference: toDate,
        async: false,
        message: message$1,
        "~run" (dataset, config$1) {
            try {
                dataset.value = new Date(dataset.value);
                if (isNaN(dataset.value)) {
                    _addIssue(this, "date", dataset, config$1, {
                        received: "\"Invalid Date\""
                    });
                    dataset.typed = false;
                }
            } catch  {
                _addIssue(this, "date", dataset, config$1);
                dataset.typed = false;
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toLowerCase/toLowerCase.ts
/**
* Creates a to lower case transformation action.
*
* @returns A to lower case action.
*/ /* @__NO_SIDE_EFFECTS__ */ function toLowerCase() {
    return {
        kind: "transformation",
        type: "to_lower_case",
        reference: toLowerCase,
        async: false,
        "~run" (dataset) {
            dataset.value = dataset.value.toLowerCase();
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toMaxValue/toMaxValue.ts
/**
* Creates a to max value transformation action.
*
* @param requirement The maximum value.
*
* @returns A to max value action.
*/ /* @__NO_SIDE_EFFECTS__ */ function toMaxValue(requirement) {
    return {
        kind: "transformation",
        type: "to_max_value",
        reference: toMaxValue,
        async: false,
        requirement,
        "~run" (dataset) {
            dataset.value = dataset.value > this.requirement ? this.requirement : dataset.value;
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toMinValue/toMinValue.ts
/**
* Creates a to min value transformation action.
*
* @param requirement The minimum value.
*
* @returns A to min value action.
*/ /* @__NO_SIDE_EFFECTS__ */ function toMinValue(requirement) {
    return {
        kind: "transformation",
        type: "to_min_value",
        reference: toMinValue,
        async: false,
        requirement,
        "~run" (dataset) {
            dataset.value = dataset.value < this.requirement ? this.requirement : dataset.value;
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toNumber/toNumber.ts
/* @__NO_SIDE_EFFECTS__ */ function toNumber(message$1) {
    return {
        kind: "transformation",
        type: "to_number",
        reference: toNumber,
        async: false,
        message: message$1,
        "~run" (dataset, config$1) {
            try {
                dataset.value = Number(dataset.value);
                if (isNaN(dataset.value)) {
                    _addIssue(this, "number", dataset, config$1);
                    dataset.typed = false;
                }
            } catch  {
                _addIssue(this, "number", dataset, config$1);
                dataset.typed = false;
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toString/toString.ts
/* @__NO_SIDE_EFFECTS__ */ function toString(message$1) {
    return {
        kind: "transformation",
        type: "to_string",
        reference: toString,
        async: false,
        message: message$1,
        "~run" (dataset, config$1) {
            try {
                dataset.value = String(dataset.value);
            } catch  {
                _addIssue(this, "string", dataset, config$1);
                dataset.typed = false;
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/toUpperCase/toUpperCase.ts
/**
* Creates a to upper case transformation action.
*
* @returns A to upper case action.
*/ /* @__NO_SIDE_EFFECTS__ */ function toUpperCase() {
    return {
        kind: "transformation",
        type: "to_upper_case",
        reference: toUpperCase,
        async: false,
        "~run" (dataset) {
            dataset.value = dataset.value.toUpperCase();
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/transform/transform.ts
/**
* Creates a custom transformation action.
*
* @param operation The transformation operation.
*
* @returns A transform action.
*/ /* @__NO_SIDE_EFFECTS__ */ function transform(operation) {
    return {
        kind: "transformation",
        type: "transform",
        reference: transform,
        async: false,
        operation,
        "~run" (dataset) {
            dataset.value = this.operation(dataset.value);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/transform/transformAsync.ts
/**
* Creates a custom transformation action.
*
* @param operation The transformation operation.
*
* @returns A transform action.
*/ /* @__NO_SIDE_EFFECTS__ */ function transformAsync(operation) {
    return {
        kind: "transformation",
        type: "transform",
        reference: transformAsync,
        async: true,
        operation,
        async "~run" (dataset) {
            dataset.value = await this.operation(dataset.value);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/trim/trim.ts
/**
* Creates a trim transformation action.
*
* @returns A trim action.
*/ /* @__NO_SIDE_EFFECTS__ */ function trim() {
    return {
        kind: "transformation",
        type: "trim",
        reference: trim,
        async: false,
        "~run" (dataset) {
            dataset.value = dataset.value.trim();
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/trimEnd/trimEnd.ts
/**
* Creates a trim end transformation action.
*
* @returns A trim end action.
*/ /* @__NO_SIDE_EFFECTS__ */ function trimEnd() {
    return {
        kind: "transformation",
        type: "trim_end",
        reference: trimEnd,
        async: false,
        "~run" (dataset) {
            dataset.value = dataset.value.trimEnd();
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/trimStart/trimStart.ts
/**
* Creates a trim start transformation action.
*
* @returns A trim start action.
*/ /* @__NO_SIDE_EFFECTS__ */ function trimStart() {
    return {
        kind: "transformation",
        type: "trim_start",
        reference: trimStart,
        async: false,
        "~run" (dataset) {
            dataset.value = dataset.value.trimStart();
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/ulid/ulid.ts
/* @__NO_SIDE_EFFECTS__ */ function ulid(message$1) {
    return {
        kind: "validation",
        type: "ulid",
        reference: ulid,
        async: false,
        expects: null,
        requirement: ULID_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "ULID", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/url/url.ts
/* @__NO_SIDE_EFFECTS__ */ function url(message$1) {
    return {
        kind: "validation",
        type: "url",
        reference: url,
        async: false,
        expects: null,
        requirement (input) {
            try {
                new URL(input);
                return true;
            } catch  {
                return false;
            }
        },
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "URL", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/uuid/uuid.ts
/* @__NO_SIDE_EFFECTS__ */ function uuid(message$1) {
    return {
        kind: "validation",
        type: "uuid",
        reference: uuid,
        async: false,
        expects: null,
        requirement: UUID_REGEX,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.test(dataset.value)) _addIssue(this, "UUID", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/value/value.ts
/* @__NO_SIDE_EFFECTS__ */ function value(requirement, message$1) {
    return {
        kind: "validation",
        type: "value",
        reference: value,
        async: false,
        expects: requirement instanceof Date ? requirement.toJSON() : /* @__PURE__ */ _stringify(requirement),
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !(this.requirement <= dataset.value && this.requirement >= dataset.value)) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/values/values.ts
/* @__NO_SIDE_EFFECTS__ */ function values(requirement, message$1) {
    return {
        kind: "validation",
        type: "values",
        reference: values,
        async: false,
        expects: `${/* @__PURE__ */ _joinExpects(requirement.map((value$1)=>value$1 instanceof Date ? value$1.toJSON() : /* @__PURE__ */ _stringify(value$1)), "|")}`,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed && !this.requirement.some((value$1)=>value$1 <= dataset.value && value$1 >= dataset.value)) _addIssue(this, "value", dataset, config$1, {
                received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/actions/words/words.ts
/* @__NO_SIDE_EFFECTS__ */ function words(locales, requirement, message$1) {
    return {
        kind: "validation",
        type: "words",
        reference: words,
        async: false,
        expects: `${requirement}`,
        locales,
        requirement,
        message: message$1,
        "~run" (dataset, config$1) {
            if (dataset.typed) {
                const count = /* @__PURE__ */ _getWordCount(this.locales, dataset.value);
                if (count !== this.requirement) _addIssue(this, "words", dataset, config$1, {
                    received: `${count}`
                });
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/methods/assert/assert.ts
/**
* Checks if the input matches the schema. As this is an assertion function, it
* can be used as a type guard.
*
* @param schema The schema to be used.
* @param input The input to be tested.
*/ function assert(schema, input) {
    const issues = schema["~run"]({
        value: input
    }, {
        abortEarly: true
    }).issues;
    if (issues) throw new ValiError(issues);
}
//#endregion
//#region src/methods/config/config.ts
/**
* Changes the local configuration of a schema.
*
* @param schema The schema to configure.
* @param config The parse configuration.
*
* @returns The configured schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function config(schema, config$1) {
    return {
        ...schema,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config_) {
            return schema["~run"](dataset, {
                ...config_,
                ...config$1
            });
        }
    };
}
//#endregion
//#region src/methods/getFallback/getFallback.ts
/**
* Returns the fallback value of the schema.
*
* @param schema The schema to get it from.
* @param dataset The output dataset if available.
* @param config The config if available.
*
* @returns The fallback value.
*/ /* @__NO_SIDE_EFFECTS__ */ function getFallback(schema, dataset, config$1) {
    return typeof schema.fallback === "function" ? schema.fallback(dataset, config$1) : schema.fallback;
}
//#endregion
//#region src/methods/fallback/fallback.ts
/**
* Returns a fallback value as output if the input does not match the schema.
*
* @param schema The schema to catch.
* @param fallback The fallback value.
*
* @returns The passed schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function fallback(schema, fallback$1) {
    return {
        ...schema,
        fallback: fallback$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const outputDataset = schema["~run"](dataset, config$1);
            return outputDataset.issues ? {
                typed: true,
                value: /* @__PURE__ */ getFallback(this, outputDataset, config$1)
            } : outputDataset;
        }
    };
}
//#endregion
//#region src/methods/fallback/fallbackAsync.ts
/**
* Returns a fallback value as output if the input does not match the schema.
*
* @param schema The schema to catch.
* @param fallback The fallback value.
*
* @returns The passed schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function fallbackAsync(schema, fallback$1) {
    return {
        ...schema,
        fallback: fallback$1,
        async: true,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const outputDataset = await schema["~run"](dataset, config$1);
            return outputDataset.issues ? {
                typed: true,
                value: await /* @__PURE__ */ getFallback(this, outputDataset, config$1)
            } : outputDataset;
        }
    };
}
//#endregion
//#region src/methods/flatten/flatten.ts
/* @__NO_SIDE_EFFECTS__ */ function flatten(issues) {
    const flatErrors = {};
    for (const issue of issues)if (issue.path) {
        const dotPath = /* @__PURE__ */ getDotPath(issue);
        if (dotPath) {
            if (!flatErrors.nested) flatErrors.nested = {};
            if (flatErrors.nested[dotPath]) flatErrors.nested[dotPath].push(issue.message);
            else flatErrors.nested[dotPath] = [
                issue.message
            ];
        } else if (flatErrors.other) flatErrors.other.push(issue.message);
        else flatErrors.other = [
            issue.message
        ];
    } else if (flatErrors.root) flatErrors.root.push(issue.message);
    else flatErrors.root = [
        issue.message
    ];
    return flatErrors;
}
//#endregion
//#region src/methods/forward/forward.ts
/**
* Forwards the issues of the passed validation action.
*
* @param action The validation action.
* @param path The path to forward the issues to.
*
* @returns The modified action.
*/ /* @__NO_SIDE_EFFECTS__ */ function forward(action, path) {
    return {
        ...action,
        "~run" (dataset, config$1) {
            const prevIssues = dataset.issues && [
                ...dataset.issues
            ];
            dataset = action["~run"](dataset, config$1);
            if (dataset.issues) {
                for (const issue of dataset.issues)if (!prevIssues?.includes(issue)) {
                    let pathInput = dataset.value;
                    for (const key of path){
                        const pathValue = pathInput[key];
                        const pathItem = {
                            type: "unknown",
                            origin: "value",
                            input: pathInput,
                            key,
                            value: pathValue
                        };
                        if (issue.path) issue.path.push(pathItem);
                        else issue.path = [
                            pathItem
                        ];
                        if (!pathValue) break;
                        pathInput = pathValue;
                    }
                }
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/methods/forward/forwardAsync.ts
/**
* Forwards the issues of the passed validation action.
*
* @param action The validation action.
* @param path The path to forward the issues to.
*
* @returns The modified action.
*/ /* @__NO_SIDE_EFFECTS__ */ function forwardAsync(action, path) {
    return {
        ...action,
        async: true,
        async "~run" (dataset, config$1) {
            const prevIssues = dataset.issues && [
                ...dataset.issues
            ];
            dataset = await action["~run"](dataset, config$1);
            if (dataset.issues) {
                for (const issue of dataset.issues)if (!prevIssues?.includes(issue)) {
                    let pathInput = dataset.value;
                    for (const key of path){
                        const pathValue = pathInput[key];
                        const pathItem = {
                            type: "unknown",
                            origin: "value",
                            input: pathInput,
                            key,
                            value: pathValue
                        };
                        if (issue.path) issue.path.push(pathItem);
                        else issue.path = [
                            pathItem
                        ];
                        if (!pathValue) break;
                        pathInput = pathValue;
                    }
                }
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/methods/getDefault/getDefault.ts
/**
* Returns the default value of the schema.
*
* @param schema The schema to get it from.
* @param dataset The input dataset if available.
* @param config The config if available.
*
* @returns The default value.
*/ /* @__NO_SIDE_EFFECTS__ */ function getDefault(schema, dataset, config$1) {
    return typeof schema.default === "function" ? schema.default(dataset, config$1) : schema.default;
}
//#endregion
//#region src/methods/getDefaults/getDefaults.ts
/**
* Returns the default values of the schema.
*
* Hint: The difference to `getDefault` is that for object and tuple schemas
* this function recursively returns the default values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The default values.
*/ /* @__NO_SIDE_EFFECTS__ */ function getDefaults(schema) {
    if ("entries" in schema) {
        const object$1 = {};
        for(const key in schema.entries)object$1[key] = /* @__PURE__ */ getDefaults(schema.entries[key]);
        return object$1;
    }
    if ("items" in schema) return schema.items.map(getDefaults);
    return /* @__PURE__ */ getDefault(schema);
}
//#endregion
//#region src/methods/getDefaults/getDefaultsAsync.ts
/**
* Returns the default values of the schema.
*
* Hint: The difference to `getDefault` is that for object and tuple schemas
* this function recursively returns the default values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The default values.
*/ /* @__NO_SIDE_EFFECTS__ */ async function getDefaultsAsync(schema) {
    if ("entries" in schema) return Object.fromEntries(await Promise.all(Object.entries(schema.entries).map(async ([key, value$1])=>[
            key,
            await /* @__PURE__ */ getDefaultsAsync(value$1)
        ])));
    if ("items" in schema) return Promise.all(schema.items.map(getDefaultsAsync));
    return /* @__PURE__ */ getDefault(schema);
}
//#endregion
//#region src/methods/getDescription/getDescription.ts
/**
* Returns the description of the schema.
*
* If multiple descriptions are defined, the last one of the highest level is
* returned. If no description is defined, `undefined` is returned.
*
* @param schema The schema to get the description from.
*
* @returns The description, if any.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function getDescription(schema) {
    return /* @__PURE__ */ _getLastMetadata(schema, "description");
}
//#endregion
//#region src/methods/getExamples/getExamples.ts
/**
* Returns the examples of a schema.
*
* If multiple examples are defined, it concatenates them using depth-first
* search. If no examples are defined, an empty array is returned.
*
* @param schema The schema to get the examples from.
*
* @returns The examples, if any.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function getExamples(schema) {
    const examples$1 = [];
    function depthFirstCollect(schema$1) {
        if ("pipe" in schema$1) {
            for (const item of schema$1.pipe)if (item.kind === "schema" && "pipe" in item) depthFirstCollect(item);
            else if (item.kind === "metadata" && item.type === "examples") examples$1.push(...item.examples);
        }
    }
    depthFirstCollect(schema);
    return examples$1;
}
//#endregion
//#region src/methods/getFallbacks/getFallbacks.ts
/**
* Returns the fallback values of the schema.
*
* Hint: The difference to `getFallback` is that for object and tuple schemas
* this function recursively returns the fallback values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The fallback values.
*/ /* @__NO_SIDE_EFFECTS__ */ function getFallbacks(schema) {
    if ("entries" in schema) {
        const object$1 = {};
        for(const key in schema.entries)object$1[key] = /* @__PURE__ */ getFallbacks(schema.entries[key]);
        return object$1;
    }
    if ("items" in schema) return schema.items.map(getFallbacks);
    return /* @__PURE__ */ getFallback(schema);
}
//#endregion
//#region src/methods/getFallbacks/getFallbacksAsync.ts
/**
* Returns the fallback values of the schema.
*
* Hint: The difference to `getFallback` is that for object and tuple schemas
* this function recursively returns the fallback values of the subschemas
* instead of `undefined`.
*
* @param schema The schema to get them from.
*
* @returns The fallback values.
*/ /* @__NO_SIDE_EFFECTS__ */ async function getFallbacksAsync(schema) {
    if ("entries" in schema) return Object.fromEntries(await Promise.all(Object.entries(schema.entries).map(async ([key, value$1])=>[
            key,
            await /* @__PURE__ */ getFallbacksAsync(value$1)
        ])));
    if ("items" in schema) return Promise.all(schema.items.map(getFallbacksAsync));
    return /* @__PURE__ */ getFallback(schema);
}
//#endregion
//#region src/methods/getMetadata/getMetadata.ts
/**
* Returns the metadata of a schema.
*
* If multiple metadata are defined, it shallowly merges them using depth-first
* search. If no metadata is defined, an empty object is returned.
*
* @param schema Schema to get the metadata from.
*
* @returns The metadata, if any.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function getMetadata(schema) {
    const result = {};
    function depthFirstMerge(schema$1) {
        if ("pipe" in schema$1) {
            for (const item of schema$1.pipe)if (item.kind === "schema" && "pipe" in item) depthFirstMerge(item);
            else if (item.kind === "metadata" && item.type === "metadata") Object.assign(result, item.metadata);
        }
    }
    depthFirstMerge(schema);
    return result;
}
//#endregion
//#region src/methods/getTitle/getTitle.ts
/**
* Returns the title of the schema.
*
* If multiple titles are defined, the last one of the highest level is
* returned. If no title is defined, `undefined` is returned.
*
* @param schema The schema to get the title from.
*
* @returns The title, if any.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function getTitle(schema) {
    return /* @__PURE__ */ _getLastMetadata(schema, "title");
}
//#endregion
//#region src/methods/is/is.ts
/**
* Checks if the input matches the schema. By using a type predicate, this
* function can be used as a type guard.
*
* @param schema The schema to be used.
* @param input The input to be tested.
*
* @returns Whether the input matches the schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function is(schema, input) {
    return !schema["~run"]({
        value: input
    }, {
        abortEarly: true
    }).issues;
}
//#endregion
//#region src/schemas/any/any.ts
/**
* Creates an any schema.
*
* Hint: This schema function exists only for completeness and is not
* recommended in practice. Instead, `unknown` should be used to accept
* unknown data.
*
* @returns An any schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function any() {
    return {
        kind: "schema",
        type: "any",
        reference: any,
        expects: "any",
        async: false,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset) {
            dataset.typed = true;
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/array/array.ts
/* @__NO_SIDE_EFFECTS__ */ function array(item, message$1) {
    return {
        kind: "schema",
        type: "array",
        reference: array,
        expects: "Array",
        async: false,
        item,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                for(let key = 0; key < input.length; key++){
                    const value$1 = input[key];
                    const itemDataset = this.item["~run"]({
                        value: value$1
                    }, config$1);
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/array/arrayAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function arrayAsync(item, message$1) {
    return {
        kind: "schema",
        type: "array",
        reference: arrayAsync,
        expects: "Array",
        async: true,
        item,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                const itemDatasets = await Promise.all(input.map((value$1)=>this.item["~run"]({
                        value: value$1
                    }, config$1)));
                for(let key = 0; key < itemDatasets.length; key++){
                    const itemDataset = itemDatasets[key];
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: input[key]
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/bigint/bigint.ts
/* @__NO_SIDE_EFFECTS__ */ function bigint(message$1) {
    return {
        kind: "schema",
        type: "bigint",
        reference: bigint,
        expects: "bigint",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (typeof dataset.value === "bigint") dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/blob/blob.ts
/* @__NO_SIDE_EFFECTS__ */ function blob(message$1) {
    return {
        kind: "schema",
        type: "blob",
        reference: blob,
        expects: "Blob",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value instanceof Blob) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/boolean/boolean.ts
/* @__NO_SIDE_EFFECTS__ */ function boolean(message$1) {
    return {
        kind: "schema",
        type: "boolean",
        reference: boolean,
        expects: "boolean",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (typeof dataset.value === "boolean") dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/custom/custom.ts
/* @__NO_SIDE_EFFECTS__ */ function custom(check$1, message$1) {
    return {
        kind: "schema",
        type: "custom",
        reference: custom,
        expects: "unknown",
        async: false,
        check: check$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (this.check(dataset.value)) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/custom/customAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function customAsync(check$1, message$1) {
    return {
        kind: "schema",
        type: "custom",
        reference: customAsync,
        expects: "unknown",
        async: true,
        check: check$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (await this.check(dataset.value)) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/date/date.ts
/* @__NO_SIDE_EFFECTS__ */ function date(message$1) {
    return {
        kind: "schema",
        type: "date",
        reference: date,
        expects: "Date",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value instanceof Date) if (!isNaN(dataset.value)) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1, {
                received: "\"Invalid Date\""
            });
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/enum/enum.ts
/* @__NO_SIDE_EFFECTS__ */ function enum_(enum__, message$1) {
    const options = [];
    for(const key in enum__)if (`${+key}` !== key || typeof enum__[key] !== "string" || !Object.is(enum__[enum__[key]], +key)) options.push(enum__[key]);
    return {
        kind: "schema",
        type: "enum",
        reference: enum_,
        expects: /* @__PURE__ */ _joinExpects(options.map(_stringify), "|"),
        async: false,
        enum: enum__,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (this.options.includes(dataset.value)) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/exactOptional/exactOptional.ts
/* @__NO_SIDE_EFFECTS__ */ function exactOptional(wrapped, default_) {
    return {
        kind: "schema",
        type: "exact_optional",
        reference: exactOptional,
        expects: wrapped.expects,
        async: false,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/exactOptional/exactOptionalAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function exactOptionalAsync(wrapped, default_) {
    return {
        kind: "schema",
        type: "exact_optional",
        reference: exactOptionalAsync,
        expects: wrapped.expects,
        async: true,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/file/file.ts
/* @__NO_SIDE_EFFECTS__ */ function file(message$1) {
    return {
        kind: "schema",
        type: "file",
        reference: file,
        expects: "File",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value instanceof File) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/function/function.ts
/* @__NO_SIDE_EFFECTS__ */ function function_(message$1) {
    return {
        kind: "schema",
        type: "function",
        reference: function_,
        expects: "Function",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (typeof dataset.value === "function") dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/instance/instance.ts
/* @__NO_SIDE_EFFECTS__ */ function instance(class_, message$1) {
    return {
        kind: "schema",
        type: "instance",
        reference: instance,
        expects: class_.name,
        async: false,
        class: class_,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value instanceof this.class) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/intersect/utils/_merge/_merge.ts
/**
* Merges two values into one single output.
*
* @param value1 First value.
* @param value2 Second value.
*
* @returns The merge dataset.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _merge(value1, value2) {
    if (typeof value1 === typeof value2) {
        if (value1 === value2 || value1 instanceof Date && value2 instanceof Date && +value1 === +value2) return {
            value: value1
        };
        if (value1 && value2 && value1.constructor === Object && value2.constructor === Object) {
            for(const key in value2)if (key in value1) {
                const dataset = /* @__PURE__ */ _merge(value1[key], value2[key]);
                if (dataset.issue) return dataset;
                value1[key] = dataset.value;
            } else value1[key] = value2[key];
            return {
                value: value1
            };
        }
        if (Array.isArray(value1) && Array.isArray(value2)) {
            if (value1.length === value2.length) {
                for(let index = 0; index < value1.length; index++){
                    const dataset = /* @__PURE__ */ _merge(value1[index], value2[index]);
                    if (dataset.issue) return dataset;
                    value1[index] = dataset.value;
                }
                return {
                    value: value1
                };
            }
        }
    }
    return {
        issue: true
    };
}
//#endregion
//#region src/schemas/intersect/intersect.ts
/* @__NO_SIDE_EFFECTS__ */ function intersect(options, message$1) {
    return {
        kind: "schema",
        type: "intersect",
        reference: intersect,
        expects: /* @__PURE__ */ _joinExpects(options.map((option)=>option.expects), "&"),
        async: false,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (this.options.length) {
                const input = dataset.value;
                let outputs;
                dataset.typed = true;
                for (const schema of this.options){
                    const optionDataset = schema["~run"]({
                        value: input
                    }, config$1);
                    if (optionDataset.issues) {
                        if (dataset.issues) dataset.issues.push(...optionDataset.issues);
                        else dataset.issues = optionDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!optionDataset.typed) dataset.typed = false;
                    if (dataset.typed) if (outputs) outputs.push(optionDataset.value);
                    else outputs = [
                        optionDataset.value
                    ];
                }
                if (dataset.typed) {
                    dataset.value = outputs[0];
                    for(let index = 1; index < outputs.length; index++){
                        const mergeDataset = /* @__PURE__ */ _merge(dataset.value, outputs[index]);
                        if (mergeDataset.issue) {
                            _addIssue(this, "type", dataset, config$1, {
                                received: "unknown"
                            });
                            break;
                        }
                        dataset.value = mergeDataset.value;
                    }
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/intersect/intersectAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function intersectAsync(options, message$1) {
    return {
        kind: "schema",
        type: "intersect",
        reference: intersectAsync,
        expects: /* @__PURE__ */ _joinExpects(options.map((option)=>option.expects), "&"),
        async: true,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (this.options.length) {
                const input = dataset.value;
                let outputs;
                dataset.typed = true;
                const optionDatasets = await Promise.all(this.options.map((schema)=>schema["~run"]({
                        value: input
                    }, config$1)));
                for (const optionDataset of optionDatasets){
                    if (optionDataset.issues) {
                        if (dataset.issues) dataset.issues.push(...optionDataset.issues);
                        else dataset.issues = optionDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!optionDataset.typed) dataset.typed = false;
                    if (dataset.typed) if (outputs) outputs.push(optionDataset.value);
                    else outputs = [
                        optionDataset.value
                    ];
                }
                if (dataset.typed) {
                    dataset.value = outputs[0];
                    for(let index = 1; index < outputs.length; index++){
                        const mergeDataset = /* @__PURE__ */ _merge(dataset.value, outputs[index]);
                        if (mergeDataset.issue) {
                            _addIssue(this, "type", dataset, config$1, {
                                received: "unknown"
                            });
                            break;
                        }
                        dataset.value = mergeDataset.value;
                    }
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/lazy/lazy.ts
/**
* Creates a lazy schema.
*
* @param getter The schema getter.
*
* @returns A lazy schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function lazy(getter) {
    return {
        kind: "schema",
        type: "lazy",
        reference: lazy,
        expects: "unknown",
        async: false,
        getter,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            return this.getter(dataset.value)["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/lazy/lazyAsync.ts
/**
* Creates a lazy schema.
*
* @param getter The schema getter.
*
* @returns A lazy schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function lazyAsync(getter) {
    return {
        kind: "schema",
        type: "lazy",
        reference: lazyAsync,
        expects: "unknown",
        async: true,
        getter,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            return (await this.getter(dataset.value))["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/literal/literal.ts
/* @__NO_SIDE_EFFECTS__ */ function literal(literal_, message$1) {
    return {
        kind: "schema",
        type: "literal",
        reference: literal,
        expects: /* @__PURE__ */ _stringify(literal_),
        async: false,
        literal: literal_,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === this.literal) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/looseObject/looseObject.ts
/* @__NO_SIDE_EFFECTS__ */ function looseObject(entries$1, message$1) {
    return {
        kind: "schema",
        type: "loose_object",
        reference: looseObject,
        expects: "Object",
        async: false,
        entries: entries$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                for(const key in this.entries){
                    const valueSchema = this.entries[key];
                    if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                        const value$1 = key in input ? input[key] : /* @__PURE__ */ getDefault(valueSchema);
                        const valueDataset = valueSchema["~run"]({
                            value: value$1
                        }, config$1);
                        if (valueDataset.issues) {
                            const pathItem = {
                                type: "object",
                                origin: "value",
                                input,
                                key,
                                value: value$1
                            };
                            for (const issue of valueDataset.issues){
                                if (issue.path) issue.path.unshift(pathItem);
                                else issue.path = [
                                    pathItem
                                ];
                                dataset.issues?.push(issue);
                            }
                            if (!dataset.issues) dataset.issues = valueDataset.issues;
                            if (config$1.abortEarly) {
                                dataset.typed = false;
                                break;
                            }
                        }
                        if (!valueDataset.typed) dataset.typed = false;
                        dataset.value[key] = valueDataset.value;
                    } else if (valueSchema.fallback !== void 0) dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
                    else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                        _addIssue(this, "key", dataset, config$1, {
                            input: void 0,
                            expected: `"${key}"`,
                            path: [
                                {
                                    type: "object",
                                    origin: "key",
                                    input,
                                    key,
                                    value: input[key]
                                }
                            ]
                        });
                        if (config$1.abortEarly) break;
                    }
                }
                if (!dataset.issues || !config$1.abortEarly) {
                    for(const key in input)if (/* @__PURE__ */ _isValidObjectKey(input, key) && !(key in this.entries)) dataset.value[key] = input[key];
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/looseObject/looseObjectAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function looseObjectAsync(entries$1, message$1) {
    return {
        kind: "schema",
        type: "loose_object",
        reference: looseObjectAsync,
        expects: "Object",
        async: true,
        entries: entries$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                const valueDatasets = await Promise.all(Object.entries(this.entries).map(async ([key, valueSchema])=>{
                    if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                        const value$1 = key in input ? input[key] : await /* @__PURE__ */ getDefault(valueSchema);
                        return [
                            key,
                            value$1,
                            valueSchema,
                            await valueSchema["~run"]({
                                value: value$1
                            }, config$1)
                        ];
                    }
                    return [
                        key,
                        input[key],
                        valueSchema,
                        null
                    ];
                }));
                for (const [key, value$1, valueSchema, valueDataset] of valueDatasets)if (valueDataset) {
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!valueDataset.typed) dataset.typed = false;
                    dataset.value[key] = valueDataset.value;
                } else if (valueSchema.fallback !== void 0) dataset.value[key] = await /* @__PURE__ */ getFallback(valueSchema);
                else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                    _addIssue(this, "key", dataset, config$1, {
                        input: void 0,
                        expected: `"${key}"`,
                        path: [
                            {
                                type: "object",
                                origin: "key",
                                input,
                                key,
                                value: value$1
                            }
                        ]
                    });
                    if (config$1.abortEarly) break;
                }
                if (!dataset.issues || !config$1.abortEarly) {
                    for(const key in input)if (/* @__PURE__ */ _isValidObjectKey(input, key) && !(key in this.entries)) dataset.value[key] = input[key];
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/looseTuple/looseTuple.ts
/* @__NO_SIDE_EFFECTS__ */ function looseTuple(items, message$1) {
    return {
        kind: "schema",
        type: "loose_tuple",
        reference: looseTuple,
        expects: "Array",
        async: false,
        items,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                for(let key = 0; key < this.items.length; key++){
                    const value$1 = input[key];
                    const itemDataset = this.items[key]["~run"]({
                        value: value$1
                    }, config$1);
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
                if (!dataset.issues || !config$1.abortEarly) for(let key = this.items.length; key < input.length; key++)dataset.value.push(input[key]);
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/looseTuple/looseTupleAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function looseTupleAsync(items, message$1) {
    return {
        kind: "schema",
        type: "loose_tuple",
        reference: looseTupleAsync,
        expects: "Array",
        async: true,
        items,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                const itemDatasets = await Promise.all(this.items.map(async (item, key)=>{
                    const value$1 = input[key];
                    return [
                        key,
                        value$1,
                        await item["~run"]({
                            value: value$1
                        }, config$1)
                    ];
                }));
                for (const [key, value$1, itemDataset] of itemDatasets){
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
                if (!dataset.issues || !config$1.abortEarly) for(let key = this.items.length; key < input.length; key++)dataset.value.push(input[key]);
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/map/map.ts
/* @__NO_SIDE_EFFECTS__ */ function map(key, value$1, message$1) {
    return {
        kind: "schema",
        type: "map",
        reference: map,
        expects: "Map",
        async: false,
        key,
        value: value$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input instanceof Map) {
                dataset.typed = true;
                dataset.value = /* @__PURE__ */ new Map();
                for (const [inputKey, inputValue] of input){
                    const keyDataset = this.key["~run"]({
                        value: inputKey
                    }, config$1);
                    if (keyDataset.issues) {
                        const pathItem = {
                            type: "map",
                            origin: "key",
                            input,
                            key: inputKey,
                            value: inputValue
                        };
                        for (const issue of keyDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = keyDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    const valueDataset = this.value["~run"]({
                        value: inputValue
                    }, config$1);
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "map",
                            origin: "value",
                            input,
                            key: inputKey,
                            value: inputValue
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!keyDataset.typed || !valueDataset.typed) dataset.typed = false;
                    dataset.value.set(keyDataset.value, valueDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/map/mapAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function mapAsync(key, value$1, message$1) {
    return {
        kind: "schema",
        type: "map",
        reference: mapAsync,
        expects: "Map",
        async: true,
        key,
        value: value$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input instanceof Map) {
                dataset.typed = true;
                dataset.value = /* @__PURE__ */ new Map();
                const datasets = await Promise.all([
                    ...input
                ].map(([inputKey, inputValue])=>Promise.all([
                        inputKey,
                        inputValue,
                        this.key["~run"]({
                            value: inputKey
                        }, config$1),
                        this.value["~run"]({
                            value: inputValue
                        }, config$1)
                    ])));
                for (const [inputKey, inputValue, keyDataset, valueDataset] of datasets){
                    if (keyDataset.issues) {
                        const pathItem = {
                            type: "map",
                            origin: "key",
                            input,
                            key: inputKey,
                            value: inputValue
                        };
                        for (const issue of keyDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = keyDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "map",
                            origin: "value",
                            input,
                            key: inputKey,
                            value: inputValue
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!keyDataset.typed || !valueDataset.typed) dataset.typed = false;
                    dataset.value.set(keyDataset.value, valueDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nan/nan.ts
/* @__NO_SIDE_EFFECTS__ */ function nan(message$1) {
    return {
        kind: "schema",
        type: "nan",
        reference: nan,
        expects: "NaN",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (Number.isNaN(dataset.value)) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/never/never.ts
/* @__NO_SIDE_EFFECTS__ */ function never(message$1) {
    return {
        kind: "schema",
        type: "never",
        reference: never,
        expects: "never",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nonNullable/nonNullable.ts
/* @__NO_SIDE_EFFECTS__ */ function nonNullable(wrapped, message$1) {
    return {
        kind: "schema",
        type: "non_nullable",
        reference: nonNullable,
        expects: "!null",
        async: false,
        wrapped,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value !== null) dataset = this.wrapped["~run"](dataset, config$1);
            if (dataset.value === null) _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nonNullable/nonNullableAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function nonNullableAsync(wrapped, message$1) {
    return {
        kind: "schema",
        type: "non_nullable",
        reference: nonNullableAsync,
        expects: "!null",
        async: true,
        wrapped,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (dataset.value !== null) dataset = await this.wrapped["~run"](dataset, config$1);
            if (dataset.value === null) _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nonNullish/nonNullish.ts
/* @__NO_SIDE_EFFECTS__ */ function nonNullish(wrapped, message$1) {
    return {
        kind: "schema",
        type: "non_nullish",
        reference: nonNullish,
        expects: "(!null & !undefined)",
        async: false,
        wrapped,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (!(dataset.value === null || dataset.value === void 0)) dataset = this.wrapped["~run"](dataset, config$1);
            if (dataset.value === null || dataset.value === void 0) _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nonNullish/nonNullishAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function nonNullishAsync(wrapped, message$1) {
    return {
        kind: "schema",
        type: "non_nullish",
        reference: nonNullishAsync,
        expects: "(!null & !undefined)",
        async: true,
        wrapped,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (!(dataset.value === null || dataset.value === void 0)) dataset = await this.wrapped["~run"](dataset, config$1);
            if (dataset.value === null || dataset.value === void 0) _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nonOptional/nonOptional.ts
/* @__NO_SIDE_EFFECTS__ */ function nonOptional(wrapped, message$1) {
    return {
        kind: "schema",
        type: "non_optional",
        reference: nonOptional,
        expects: "!undefined",
        async: false,
        wrapped,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value !== void 0) dataset = this.wrapped["~run"](dataset, config$1);
            if (dataset.value === void 0) _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nonOptional/nonOptionalAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function nonOptionalAsync(wrapped, message$1) {
    return {
        kind: "schema",
        type: "non_optional",
        reference: nonOptionalAsync,
        expects: "!undefined",
        async: true,
        wrapped,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (dataset.value !== void 0) dataset = await this.wrapped["~run"](dataset, config$1);
            if (dataset.value === void 0) _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/null/null.ts
/* @__NO_SIDE_EFFECTS__ */ function null_(message$1) {
    return {
        kind: "schema",
        type: "null",
        reference: null_,
        expects: "null",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === null) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/nullable/nullable.ts
/* @__NO_SIDE_EFFECTS__ */ function nullable(wrapped, default_) {
    return {
        kind: "schema",
        type: "nullable",
        reference: nullable,
        expects: `(${wrapped.expects} | null)`,
        async: false,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === null) {
                if (this.default !== void 0) dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === null) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/nullable/nullableAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function nullableAsync(wrapped, default_) {
    return {
        kind: "schema",
        type: "nullable",
        reference: nullableAsync,
        expects: `(${wrapped.expects} | null)`,
        async: true,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (dataset.value === null) {
                if (this.default !== void 0) dataset.value = await /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === null) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/nullish/nullish.ts
/* @__NO_SIDE_EFFECTS__ */ function nullish(wrapped, default_) {
    return {
        kind: "schema",
        type: "nullish",
        reference: nullish,
        expects: `(${wrapped.expects} | null | undefined)`,
        async: false,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === null || dataset.value === void 0) {
                if (this.default !== void 0) dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === null || dataset.value === void 0) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/nullish/nullishAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function nullishAsync(wrapped, default_) {
    return {
        kind: "schema",
        type: "nullish",
        reference: nullishAsync,
        expects: `(${wrapped.expects} | null | undefined)`,
        async: true,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (dataset.value === null || dataset.value === void 0) {
                if (this.default !== void 0) dataset.value = await /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === null || dataset.value === void 0) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/number/number.ts
/* @__NO_SIDE_EFFECTS__ */ function number(message$1) {
    return {
        kind: "schema",
        type: "number",
        reference: number,
        expects: "number",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (typeof dataset.value === "number" && !isNaN(dataset.value)) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/object/object.ts
/* @__NO_SIDE_EFFECTS__ */ function object(entries$1, message$1) {
    return {
        kind: "schema",
        type: "object",
        reference: object,
        expects: "Object",
        async: false,
        entries: entries$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                for(const key in this.entries){
                    const valueSchema = this.entries[key];
                    if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                        const value$1 = key in input ? input[key] : /* @__PURE__ */ getDefault(valueSchema);
                        const valueDataset = valueSchema["~run"]({
                            value: value$1
                        }, config$1);
                        if (valueDataset.issues) {
                            const pathItem = {
                                type: "object",
                                origin: "value",
                                input,
                                key,
                                value: value$1
                            };
                            for (const issue of valueDataset.issues){
                                if (issue.path) issue.path.unshift(pathItem);
                                else issue.path = [
                                    pathItem
                                ];
                                dataset.issues?.push(issue);
                            }
                            if (!dataset.issues) dataset.issues = valueDataset.issues;
                            if (config$1.abortEarly) {
                                dataset.typed = false;
                                break;
                            }
                        }
                        if (!valueDataset.typed) dataset.typed = false;
                        dataset.value[key] = valueDataset.value;
                    } else if (valueSchema.fallback !== void 0) dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
                    else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                        _addIssue(this, "key", dataset, config$1, {
                            input: void 0,
                            expected: `"${key}"`,
                            path: [
                                {
                                    type: "object",
                                    origin: "key",
                                    input,
                                    key,
                                    value: input[key]
                                }
                            ]
                        });
                        if (config$1.abortEarly) break;
                    }
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/object/objectAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function objectAsync(entries$1, message$1) {
    return {
        kind: "schema",
        type: "object",
        reference: objectAsync,
        expects: "Object",
        async: true,
        entries: entries$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                const valueDatasets = await Promise.all(Object.entries(this.entries).map(async ([key, valueSchema])=>{
                    if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                        const value$1 = key in input ? input[key] : await /* @__PURE__ */ getDefault(valueSchema);
                        return [
                            key,
                            value$1,
                            valueSchema,
                            await valueSchema["~run"]({
                                value: value$1
                            }, config$1)
                        ];
                    }
                    return [
                        key,
                        input[key],
                        valueSchema,
                        null
                    ];
                }));
                for (const [key, value$1, valueSchema, valueDataset] of valueDatasets)if (valueDataset) {
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!valueDataset.typed) dataset.typed = false;
                    dataset.value[key] = valueDataset.value;
                } else if (valueSchema.fallback !== void 0) dataset.value[key] = await /* @__PURE__ */ getFallback(valueSchema);
                else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                    _addIssue(this, "key", dataset, config$1, {
                        input: void 0,
                        expected: `"${key}"`,
                        path: [
                            {
                                type: "object",
                                origin: "key",
                                input,
                                key,
                                value: value$1
                            }
                        ]
                    });
                    if (config$1.abortEarly) break;
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/objectWithRest/objectWithRest.ts
/* @__NO_SIDE_EFFECTS__ */ function objectWithRest(entries$1, rest, message$1) {
    return {
        kind: "schema",
        type: "object_with_rest",
        reference: objectWithRest,
        expects: "Object",
        async: false,
        entries: entries$1,
        rest,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                for(const key in this.entries){
                    const valueSchema = this.entries[key];
                    if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                        const value$1 = key in input ? input[key] : /* @__PURE__ */ getDefault(valueSchema);
                        const valueDataset = valueSchema["~run"]({
                            value: value$1
                        }, config$1);
                        if (valueDataset.issues) {
                            const pathItem = {
                                type: "object",
                                origin: "value",
                                input,
                                key,
                                value: value$1
                            };
                            for (const issue of valueDataset.issues){
                                if (issue.path) issue.path.unshift(pathItem);
                                else issue.path = [
                                    pathItem
                                ];
                                dataset.issues?.push(issue);
                            }
                            if (!dataset.issues) dataset.issues = valueDataset.issues;
                            if (config$1.abortEarly) {
                                dataset.typed = false;
                                break;
                            }
                        }
                        if (!valueDataset.typed) dataset.typed = false;
                        dataset.value[key] = valueDataset.value;
                    } else if (valueSchema.fallback !== void 0) dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
                    else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                        _addIssue(this, "key", dataset, config$1, {
                            input: void 0,
                            expected: `"${key}"`,
                            path: [
                                {
                                    type: "object",
                                    origin: "key",
                                    input,
                                    key,
                                    value: input[key]
                                }
                            ]
                        });
                        if (config$1.abortEarly) break;
                    }
                }
                if (!dataset.issues || !config$1.abortEarly) {
                    for(const key in input)if (/* @__PURE__ */ _isValidObjectKey(input, key) && !(key in this.entries)) {
                        const valueDataset = this.rest["~run"]({
                            value: input[key]
                        }, config$1);
                        if (valueDataset.issues) {
                            const pathItem = {
                                type: "object",
                                origin: "value",
                                input,
                                key,
                                value: input[key]
                            };
                            for (const issue of valueDataset.issues){
                                if (issue.path) issue.path.unshift(pathItem);
                                else issue.path = [
                                    pathItem
                                ];
                                dataset.issues?.push(issue);
                            }
                            if (!dataset.issues) dataset.issues = valueDataset.issues;
                            if (config$1.abortEarly) {
                                dataset.typed = false;
                                break;
                            }
                        }
                        if (!valueDataset.typed) dataset.typed = false;
                        dataset.value[key] = valueDataset.value;
                    }
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/objectWithRest/objectWithRestAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function objectWithRestAsync(entries$1, rest, message$1) {
    return {
        kind: "schema",
        type: "object_with_rest",
        reference: objectWithRestAsync,
        expects: "Object",
        async: true,
        entries: entries$1,
        rest,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                const [normalDatasets, restDatasets] = await Promise.all([
                    Promise.all(Object.entries(this.entries).map(async ([key, valueSchema])=>{
                        if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                            const value$1 = key in input ? input[key] : await /* @__PURE__ */ getDefault(valueSchema);
                            return [
                                key,
                                value$1,
                                valueSchema,
                                await valueSchema["~run"]({
                                    value: value$1
                                }, config$1)
                            ];
                        }
                        return [
                            key,
                            input[key],
                            valueSchema,
                            null
                        ];
                    })),
                    Promise.all(Object.entries(input).filter(([key])=>/* @__PURE__ */ _isValidObjectKey(input, key) && !(key in this.entries)).map(async ([key, value$1])=>[
                            key,
                            value$1,
                            await this.rest["~run"]({
                                value: value$1
                            }, config$1)
                        ]))
                ]);
                for (const [key, value$1, valueSchema, valueDataset] of normalDatasets)if (valueDataset) {
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!valueDataset.typed) dataset.typed = false;
                    dataset.value[key] = valueDataset.value;
                } else if (valueSchema.fallback !== void 0) dataset.value[key] = await /* @__PURE__ */ getFallback(valueSchema);
                else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                    _addIssue(this, "key", dataset, config$1, {
                        input: void 0,
                        expected: `"${key}"`,
                        path: [
                            {
                                type: "object",
                                origin: "key",
                                input,
                                key,
                                value: value$1
                            }
                        ]
                    });
                    if (config$1.abortEarly) break;
                }
                if (!dataset.issues || !config$1.abortEarly) for (const [key, value$1, valueDataset] of restDatasets){
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!valueDataset.typed) dataset.typed = false;
                    dataset.value[key] = valueDataset.value;
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/optional/optional.ts
/* @__NO_SIDE_EFFECTS__ */ function optional(wrapped, default_) {
    return {
        kind: "schema",
        type: "optional",
        reference: optional,
        expects: `(${wrapped.expects} | undefined)`,
        async: false,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === void 0) {
                if (this.default !== void 0) dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === void 0) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/optional/optionalAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function optionalAsync(wrapped, default_) {
    return {
        kind: "schema",
        type: "optional",
        reference: optionalAsync,
        expects: `(${wrapped.expects} | undefined)`,
        async: true,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (dataset.value === void 0) {
                if (this.default !== void 0) dataset.value = await /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === void 0) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/picklist/picklist.ts
/* @__NO_SIDE_EFFECTS__ */ function picklist(options, message$1) {
    return {
        kind: "schema",
        type: "picklist",
        reference: picklist,
        expects: /* @__PURE__ */ _joinExpects(options.map(_stringify), "|"),
        async: false,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (this.options.includes(dataset.value)) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/promise/promise.ts
/* @__NO_SIDE_EFFECTS__ */ function promise(message$1) {
    return {
        kind: "schema",
        type: "promise",
        reference: promise,
        expects: "Promise",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value instanceof Promise) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/record/record.ts
/* @__NO_SIDE_EFFECTS__ */ function record(key, value$1, message$1) {
    return {
        kind: "schema",
        type: "record",
        reference: record,
        expects: "Object",
        async: false,
        key,
        value: value$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                for(const entryKey in input)if (/* @__PURE__ */ _isValidObjectKey(input, entryKey)) {
                    const entryValue = input[entryKey];
                    const keyDataset = this.key["~run"]({
                        value: entryKey
                    }, config$1);
                    if (keyDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "key",
                            input,
                            key: entryKey,
                            value: entryValue
                        };
                        for (const issue of keyDataset.issues){
                            issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = keyDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    const valueDataset = this.value["~run"]({
                        value: entryValue
                    }, config$1);
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "value",
                            input,
                            key: entryKey,
                            value: entryValue
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!keyDataset.typed || !valueDataset.typed) dataset.typed = false;
                    if (keyDataset.typed) dataset.value[keyDataset.value] = valueDataset.value;
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/record/recordAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function recordAsync(key, value$1, message$1) {
    return {
        kind: "schema",
        type: "record",
        reference: recordAsync,
        expects: "Object",
        async: true,
        key,
        value: value$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                const datasets = await Promise.all(Object.entries(input).filter(([key$1])=>/* @__PURE__ */ _isValidObjectKey(input, key$1)).map(([entryKey, entryValue])=>Promise.all([
                        entryKey,
                        entryValue,
                        this.key["~run"]({
                            value: entryKey
                        }, config$1),
                        this.value["~run"]({
                            value: entryValue
                        }, config$1)
                    ])));
                for (const [entryKey, entryValue, keyDataset, valueDataset] of datasets){
                    if (keyDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "key",
                            input,
                            key: entryKey,
                            value: entryValue
                        };
                        for (const issue of keyDataset.issues){
                            issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = keyDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "value",
                            input,
                            key: entryKey,
                            value: entryValue
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!keyDataset.typed || !valueDataset.typed) dataset.typed = false;
                    if (keyDataset.typed) dataset.value[keyDataset.value] = valueDataset.value;
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/set/set.ts
/* @__NO_SIDE_EFFECTS__ */ function set(value$1, message$1) {
    return {
        kind: "schema",
        type: "set",
        reference: set,
        expects: "Set",
        async: false,
        value: value$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input instanceof Set) {
                dataset.typed = true;
                dataset.value = /* @__PURE__ */ new Set();
                for (const inputValue of input){
                    const valueDataset = this.value["~run"]({
                        value: inputValue
                    }, config$1);
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "set",
                            origin: "value",
                            input,
                            key: null,
                            value: inputValue
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!valueDataset.typed) dataset.typed = false;
                    dataset.value.add(valueDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/set/setAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function setAsync(value$1, message$1) {
    return {
        kind: "schema",
        type: "set",
        reference: setAsync,
        expects: "Set",
        async: true,
        value: value$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input instanceof Set) {
                dataset.typed = true;
                dataset.value = /* @__PURE__ */ new Set();
                const valueDatasets = await Promise.all([
                    ...input
                ].map(async (inputValue)=>[
                        inputValue,
                        await this.value["~run"]({
                            value: inputValue
                        }, config$1)
                    ]));
                for (const [inputValue, valueDataset] of valueDatasets){
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "set",
                            origin: "value",
                            input,
                            key: null,
                            value: inputValue
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!valueDataset.typed) dataset.typed = false;
                    dataset.value.add(valueDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/strictObject/strictObject.ts
/* @__NO_SIDE_EFFECTS__ */ function strictObject(entries$1, message$1) {
    return {
        kind: "schema",
        type: "strict_object",
        reference: strictObject,
        expects: "Object",
        async: false,
        entries: entries$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                for(const key in this.entries){
                    const valueSchema = this.entries[key];
                    if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                        const value$1 = key in input ? input[key] : /* @__PURE__ */ getDefault(valueSchema);
                        const valueDataset = valueSchema["~run"]({
                            value: value$1
                        }, config$1);
                        if (valueDataset.issues) {
                            const pathItem = {
                                type: "object",
                                origin: "value",
                                input,
                                key,
                                value: value$1
                            };
                            for (const issue of valueDataset.issues){
                                if (issue.path) issue.path.unshift(pathItem);
                                else issue.path = [
                                    pathItem
                                ];
                                dataset.issues?.push(issue);
                            }
                            if (!dataset.issues) dataset.issues = valueDataset.issues;
                            if (config$1.abortEarly) {
                                dataset.typed = false;
                                break;
                            }
                        }
                        if (!valueDataset.typed) dataset.typed = false;
                        dataset.value[key] = valueDataset.value;
                    } else if (valueSchema.fallback !== void 0) dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
                    else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                        _addIssue(this, "key", dataset, config$1, {
                            input: void 0,
                            expected: `"${key}"`,
                            path: [
                                {
                                    type: "object",
                                    origin: "key",
                                    input,
                                    key,
                                    value: input[key]
                                }
                            ]
                        });
                        if (config$1.abortEarly) break;
                    }
                }
                if (!dataset.issues || !config$1.abortEarly) {
                    for(const key in input)if (!(key in this.entries)) {
                        _addIssue(this, "key", dataset, config$1, {
                            input: key,
                            expected: "never",
                            path: [
                                {
                                    type: "object",
                                    origin: "key",
                                    input,
                                    key,
                                    value: input[key]
                                }
                            ]
                        });
                        break;
                    }
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/strictObject/strictObjectAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function strictObjectAsync(entries$1, message$1) {
    return {
        kind: "schema",
        type: "strict_object",
        reference: strictObjectAsync,
        expects: "Object",
        async: true,
        entries: entries$1,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                dataset.typed = true;
                dataset.value = {};
                const valueDatasets = await Promise.all(Object.entries(this.entries).map(async ([key, valueSchema])=>{
                    if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
                        const value$1 = key in input ? input[key] : await /* @__PURE__ */ getDefault(valueSchema);
                        return [
                            key,
                            value$1,
                            valueSchema,
                            await valueSchema["~run"]({
                                value: value$1
                            }, config$1)
                        ];
                    }
                    return [
                        key,
                        input[key],
                        valueSchema,
                        null
                    ];
                }));
                for (const [key, value$1, valueSchema, valueDataset] of valueDatasets)if (valueDataset) {
                    if (valueDataset.issues) {
                        const pathItem = {
                            type: "object",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of valueDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = valueDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!valueDataset.typed) dataset.typed = false;
                    dataset.value[key] = valueDataset.value;
                } else if (valueSchema.fallback !== void 0) dataset.value[key] = await /* @__PURE__ */ getFallback(valueSchema);
                else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
                    _addIssue(this, "key", dataset, config$1, {
                        input: void 0,
                        expected: `"${key}"`,
                        path: [
                            {
                                type: "object",
                                origin: "key",
                                input,
                                key,
                                value: value$1
                            }
                        ]
                    });
                    if (config$1.abortEarly) break;
                }
                if (!dataset.issues || !config$1.abortEarly) {
                    for(const key in input)if (!(key in this.entries)) {
                        _addIssue(this, "key", dataset, config$1, {
                            input: key,
                            expected: "never",
                            path: [
                                {
                                    type: "object",
                                    origin: "key",
                                    input,
                                    key,
                                    value: input[key]
                                }
                            ]
                        });
                        break;
                    }
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/strictTuple/strictTuple.ts
/* @__NO_SIDE_EFFECTS__ */ function strictTuple(items, message$1) {
    return {
        kind: "schema",
        type: "strict_tuple",
        reference: strictTuple,
        expects: "Array",
        async: false,
        items,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                for(let key = 0; key < this.items.length; key++){
                    const value$1 = input[key];
                    const itemDataset = this.items[key]["~run"]({
                        value: value$1
                    }, config$1);
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
                if (!(dataset.issues && config$1.abortEarly) && this.items.length < input.length) _addIssue(this, "type", dataset, config$1, {
                    input: input[this.items.length],
                    expected: "never",
                    path: [
                        {
                            type: "array",
                            origin: "value",
                            input,
                            key: this.items.length,
                            value: input[this.items.length]
                        }
                    ]
                });
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/strictTuple/strictTupleAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function strictTupleAsync(items, message$1) {
    return {
        kind: "schema",
        type: "strict_tuple",
        reference: strictTupleAsync,
        expects: "Array",
        async: true,
        items,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                const itemDatasets = await Promise.all(this.items.map(async (item, key)=>{
                    const value$1 = input[key];
                    return [
                        key,
                        value$1,
                        await item["~run"]({
                            value: value$1
                        }, config$1)
                    ];
                }));
                for (const [key, value$1, itemDataset] of itemDatasets){
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
                if (!(dataset.issues && config$1.abortEarly) && this.items.length < input.length) _addIssue(this, "type", dataset, config$1, {
                    input: input[this.items.length],
                    expected: "never",
                    path: [
                        {
                            type: "array",
                            origin: "value",
                            input,
                            key: this.items.length,
                            value: input[this.items.length]
                        }
                    ]
                });
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/string/string.ts
/* @__NO_SIDE_EFFECTS__ */ function string(message$1) {
    return {
        kind: "schema",
        type: "string",
        reference: string,
        expects: "string",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (typeof dataset.value === "string") dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/symbol/symbol.ts
/* @__NO_SIDE_EFFECTS__ */ function symbol(message$1) {
    return {
        kind: "schema",
        type: "symbol",
        reference: symbol,
        expects: "symbol",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (typeof dataset.value === "symbol") dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/tuple/tuple.ts
/* @__NO_SIDE_EFFECTS__ */ function tuple(items, message$1) {
    return {
        kind: "schema",
        type: "tuple",
        reference: tuple,
        expects: "Array",
        async: false,
        items,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                for(let key = 0; key < this.items.length; key++){
                    const value$1 = input[key];
                    const itemDataset = this.items[key]["~run"]({
                        value: value$1
                    }, config$1);
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/tuple/tupleAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function tupleAsync(items, message$1) {
    return {
        kind: "schema",
        type: "tuple",
        reference: tupleAsync,
        expects: "Array",
        async: true,
        items,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                const itemDatasets = await Promise.all(this.items.map(async (item, key)=>{
                    const value$1 = input[key];
                    return [
                        key,
                        value$1,
                        await item["~run"]({
                            value: value$1
                        }, config$1)
                    ];
                }));
                for (const [key, value$1, itemDataset] of itemDatasets){
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/tupleWithRest/tupleWithRest.ts
/* @__NO_SIDE_EFFECTS__ */ function tupleWithRest(items, rest, message$1) {
    return {
        kind: "schema",
        type: "tuple_with_rest",
        reference: tupleWithRest,
        expects: "Array",
        async: false,
        items,
        rest,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                for(let key = 0; key < this.items.length; key++){
                    const value$1 = input[key];
                    const itemDataset = this.items[key]["~run"]({
                        value: value$1
                    }, config$1);
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
                if (!dataset.issues || !config$1.abortEarly) for(let key = this.items.length; key < input.length; key++){
                    const value$1 = input[key];
                    const itemDataset = this.rest["~run"]({
                        value: value$1
                    }, config$1);
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/tupleWithRest/tupleWithRestAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function tupleWithRestAsync(items, rest, message$1) {
    return {
        kind: "schema",
        type: "tuple_with_rest",
        reference: tupleWithRestAsync,
        expects: "Array",
        async: true,
        items,
        rest,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (Array.isArray(input)) {
                dataset.typed = true;
                dataset.value = [];
                const [normalDatasets, restDatasets] = await Promise.all([
                    Promise.all(this.items.map(async (item, key)=>{
                        const value$1 = input[key];
                        return [
                            key,
                            value$1,
                            await item["~run"]({
                                value: value$1
                            }, config$1)
                        ];
                    })),
                    Promise.all(input.slice(this.items.length).map(async (value$1, key)=>{
                        return [
                            key + this.items.length,
                            value$1,
                            await this.rest["~run"]({
                                value: value$1
                            }, config$1)
                        ];
                    }))
                ]);
                for (const [key, value$1, itemDataset] of normalDatasets){
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
                if (!dataset.issues || !config$1.abortEarly) for (const [key, value$1, itemDataset] of restDatasets){
                    if (itemDataset.issues) {
                        const pathItem = {
                            type: "array",
                            origin: "value",
                            input,
                            key,
                            value: value$1
                        };
                        for (const issue of itemDataset.issues){
                            if (issue.path) issue.path.unshift(pathItem);
                            else issue.path = [
                                pathItem
                            ];
                            dataset.issues?.push(issue);
                        }
                        if (!dataset.issues) dataset.issues = itemDataset.issues;
                        if (config$1.abortEarly) {
                            dataset.typed = false;
                            break;
                        }
                    }
                    if (!itemDataset.typed) dataset.typed = false;
                    dataset.value.push(itemDataset.value);
                }
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/undefined/undefined.ts
/* @__NO_SIDE_EFFECTS__ */ function undefined_(message$1) {
    return {
        kind: "schema",
        type: "undefined",
        reference: undefined_,
        expects: "undefined",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === void 0) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/undefinedable/undefinedable.ts
/* @__NO_SIDE_EFFECTS__ */ function undefinedable(wrapped, default_) {
    return {
        kind: "schema",
        type: "undefinedable",
        reference: undefinedable,
        expects: `(${wrapped.expects} | undefined)`,
        async: false,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === void 0) {
                if (this.default !== void 0) dataset.value = /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === void 0) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/undefinedable/undefinedableAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function undefinedableAsync(wrapped, default_) {
    return {
        kind: "schema",
        type: "undefinedable",
        reference: undefinedableAsync,
        expects: `(${wrapped.expects} | undefined)`,
        async: true,
        wrapped,
        default: default_,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            if (dataset.value === void 0) {
                if (this.default !== void 0) dataset.value = await /* @__PURE__ */ getDefault(this, dataset, config$1);
                if (dataset.value === void 0) {
                    dataset.typed = true;
                    return dataset;
                }
            }
            return this.wrapped["~run"](dataset, config$1);
        }
    };
}
//#endregion
//#region src/schemas/union/utils/_subIssues/_subIssues.ts
/**
* Returns the sub issues of the provided datasets for the union issue.
*
* @param datasets The datasets.
*
* @returns The sub issues.
*
* @internal
*/ /* @__NO_SIDE_EFFECTS__ */ function _subIssues(datasets) {
    let issues;
    if (datasets) for (const dataset of datasets)if (issues) issues.push(...dataset.issues);
    else issues = dataset.issues;
    return issues;
}
//#endregion
//#region src/schemas/union/union.ts
/* @__NO_SIDE_EFFECTS__ */ function union(options, message$1) {
    return {
        kind: "schema",
        type: "union",
        reference: union,
        expects: /* @__PURE__ */ _joinExpects(options.map((option)=>option.expects), "|"),
        async: false,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            let validDataset;
            let typedDatasets;
            let untypedDatasets;
            for (const schema of this.options){
                const optionDataset = schema["~run"]({
                    value: dataset.value
                }, config$1);
                if (optionDataset.typed) if (optionDataset.issues) if (typedDatasets) typedDatasets.push(optionDataset);
                else typedDatasets = [
                    optionDataset
                ];
                else {
                    validDataset = optionDataset;
                    break;
                }
                else if (untypedDatasets) untypedDatasets.push(optionDataset);
                else untypedDatasets = [
                    optionDataset
                ];
            }
            if (validDataset) return validDataset;
            if (typedDatasets) {
                if (typedDatasets.length === 1) return typedDatasets[0];
                _addIssue(this, "type", dataset, config$1, {
                    issues: /* @__PURE__ */ _subIssues(typedDatasets)
                });
                dataset.typed = true;
            } else if (untypedDatasets?.length === 1) return untypedDatasets[0];
            else _addIssue(this, "type", dataset, config$1, {
                issues: /* @__PURE__ */ _subIssues(untypedDatasets)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/union/unionAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function unionAsync(options, message$1) {
    return {
        kind: "schema",
        type: "union",
        reference: unionAsync,
        expects: /* @__PURE__ */ _joinExpects(options.map((option)=>option.expects), "|"),
        async: true,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            let validDataset;
            let typedDatasets;
            let untypedDatasets;
            for (const schema of this.options){
                const optionDataset = await schema["~run"]({
                    value: dataset.value
                }, config$1);
                if (optionDataset.typed) if (optionDataset.issues) if (typedDatasets) typedDatasets.push(optionDataset);
                else typedDatasets = [
                    optionDataset
                ];
                else {
                    validDataset = optionDataset;
                    break;
                }
                else if (untypedDatasets) untypedDatasets.push(optionDataset);
                else untypedDatasets = [
                    optionDataset
                ];
            }
            if (validDataset) return validDataset;
            if (typedDatasets) {
                if (typedDatasets.length === 1) return typedDatasets[0];
                _addIssue(this, "type", dataset, config$1, {
                    issues: /* @__PURE__ */ _subIssues(typedDatasets)
                });
                dataset.typed = true;
            } else if (untypedDatasets?.length === 1) return untypedDatasets[0];
            else _addIssue(this, "type", dataset, config$1, {
                issues: /* @__PURE__ */ _subIssues(untypedDatasets)
            });
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/unknown/unknown.ts
/**
* Creates a unknown schema.
*
* @returns A unknown schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function unknown() {
    return {
        kind: "schema",
        type: "unknown",
        reference: unknown,
        expects: "unknown",
        async: false,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset) {
            dataset.typed = true;
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/variant/variant.ts
/* @__NO_SIDE_EFFECTS__ */ function variant(key, options, message$1) {
    return {
        kind: "schema",
        type: "variant",
        reference: variant,
        expects: "Object",
        async: false,
        key,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                let outputDataset;
                let maxDiscriminatorPriority = 0;
                let invalidDiscriminatorKey = this.key;
                let expectedDiscriminators = [];
                const parseOptions = (variant$1, allKeys)=>{
                    for (const schema of variant$1.options){
                        if (schema.type === "variant") parseOptions(schema, new Set(allKeys).add(schema.key));
                        else {
                            let keysAreValid = true;
                            let currentPriority = 0;
                            for (const currentKey of allKeys){
                                const discriminatorSchema = schema.entries[currentKey];
                                if (currentKey in input ? discriminatorSchema["~run"]({
                                    typed: false,
                                    value: input[currentKey]
                                }, {
                                    abortEarly: true
                                }).issues : discriminatorSchema.type !== "exact_optional" && discriminatorSchema.type !== "optional" && discriminatorSchema.type !== "nullish") {
                                    keysAreValid = false;
                                    if (invalidDiscriminatorKey !== currentKey && (maxDiscriminatorPriority < currentPriority || maxDiscriminatorPriority === currentPriority && currentKey in input && !(invalidDiscriminatorKey in input))) {
                                        maxDiscriminatorPriority = currentPriority;
                                        invalidDiscriminatorKey = currentKey;
                                        expectedDiscriminators = [];
                                    }
                                    if (invalidDiscriminatorKey === currentKey) expectedDiscriminators.push(schema.entries[currentKey].expects);
                                    break;
                                }
                                currentPriority++;
                            }
                            if (keysAreValid) {
                                const optionDataset = schema["~run"]({
                                    value: input
                                }, config$1);
                                if (!outputDataset || !outputDataset.typed && optionDataset.typed) outputDataset = optionDataset;
                            }
                        }
                        if (outputDataset && !outputDataset.issues) break;
                    }
                };
                parseOptions(this, new Set([
                    this.key
                ]));
                if (outputDataset) return outputDataset;
                _addIssue(this, "type", dataset, config$1, {
                    input: input[invalidDiscriminatorKey],
                    expected: /* @__PURE__ */ _joinExpects(expectedDiscriminators, "|"),
                    path: [
                        {
                            type: "object",
                            origin: "value",
                            input,
                            key: invalidDiscriminatorKey,
                            value: input[invalidDiscriminatorKey]
                        }
                    ]
                });
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/variant/variantAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function variantAsync(key, options, message$1) {
    return {
        kind: "schema",
        type: "variant",
        reference: variantAsync,
        expects: "Object",
        async: true,
        key,
        options,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            const input = dataset.value;
            if (input && typeof input === "object") {
                let outputDataset;
                let maxDiscriminatorPriority = 0;
                let invalidDiscriminatorKey = this.key;
                let expectedDiscriminators = [];
                const parseOptions = async (variant$1, allKeys)=>{
                    for (const schema of variant$1.options){
                        if (schema.type === "variant") await parseOptions(schema, new Set(allKeys).add(schema.key));
                        else {
                            let keysAreValid = true;
                            let currentPriority = 0;
                            for (const currentKey of allKeys){
                                const discriminatorSchema = schema.entries[currentKey];
                                if (currentKey in input ? (await discriminatorSchema["~run"]({
                                    typed: false,
                                    value: input[currentKey]
                                }, {
                                    abortEarly: true
                                })).issues : discriminatorSchema.type !== "exact_optional" && discriminatorSchema.type !== "optional" && discriminatorSchema.type !== "nullish") {
                                    keysAreValid = false;
                                    if (invalidDiscriminatorKey !== currentKey && (maxDiscriminatorPriority < currentPriority || maxDiscriminatorPriority === currentPriority && currentKey in input && !(invalidDiscriminatorKey in input))) {
                                        maxDiscriminatorPriority = currentPriority;
                                        invalidDiscriminatorKey = currentKey;
                                        expectedDiscriminators = [];
                                    }
                                    if (invalidDiscriminatorKey === currentKey) expectedDiscriminators.push(schema.entries[currentKey].expects);
                                    break;
                                }
                                currentPriority++;
                            }
                            if (keysAreValid) {
                                const optionDataset = await schema["~run"]({
                                    value: input
                                }, config$1);
                                if (!outputDataset || !outputDataset.typed && optionDataset.typed) outputDataset = optionDataset;
                            }
                        }
                        if (outputDataset && !outputDataset.issues) break;
                    }
                };
                await parseOptions(this, new Set([
                    this.key
                ]));
                if (outputDataset) return outputDataset;
                _addIssue(this, "type", dataset, config$1, {
                    input: input[invalidDiscriminatorKey],
                    expected: /* @__PURE__ */ _joinExpects(expectedDiscriminators, "|"),
                    path: [
                        {
                            type: "object",
                            origin: "value",
                            input,
                            key: invalidDiscriminatorKey,
                            value: input[invalidDiscriminatorKey]
                        }
                    ]
                });
            } else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/schemas/void/void.ts
/* @__NO_SIDE_EFFECTS__ */ function void_(message$1) {
    return {
        kind: "schema",
        type: "void",
        reference: void_,
        expects: "void",
        async: false,
        message: message$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            if (dataset.value === void 0) dataset.typed = true;
            else _addIssue(this, "type", dataset, config$1);
            return dataset;
        }
    };
}
//#endregion
//#region src/methods/keyof/keyof.ts
/* @__NO_SIDE_EFFECTS__ */ function keyof(schema, message$1) {
    return /* @__PURE__ */ picklist(Object.keys(schema.entries), message$1);
}
//#endregion
//#region src/methods/message/message.ts
/**
* Changes the local message configuration of a schema.
*
* @param schema The schema to configure.
* @param message_ The error message.
*
* @returns The configured schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function message(schema, message_) {
    return {
        ...schema,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            return schema["~run"](dataset, {
                ...config$1,
                message: message_
            });
        }
    };
}
//#endregion
//#region src/methods/omit/omit.ts
/**
* Creates a modified copy of an object schema that does not contain the
* selected entries.
*
* @param schema The schema to omit from.
* @param keys The selected entries.
*
* @returns An object schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function omit(schema, keys) {
    const entries$1 = {
        ...schema.entries
    };
    for (const key of keys)delete entries$1[key];
    return {
        ...schema,
        entries: entries$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        }
    };
}
//#endregion
//#region src/methods/parse/parse.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parsed input.
*/ function parse(schema, input, config$1) {
    const dataset = schema["~run"]({
        value: input
    }, /* @__PURE__ */ getGlobalConfig(config$1));
    if (dataset.issues) throw new ValiError(dataset.issues);
    return dataset.value;
}
//#endregion
//#region src/methods/parse/parseAsync.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parsed input.
*/ async function parseAsync(schema, input, config$1) {
    const dataset = await schema["~run"]({
        value: input
    }, /* @__PURE__ */ getGlobalConfig(config$1));
    if (dataset.issues) throw new ValiError(dataset.issues);
    return dataset.value;
}
//#endregion
//#region src/methods/parser/parser.ts
/* @__NO_SIDE_EFFECTS__ */ function parser(schema, config$1) {
    const func = (input)=>parse(schema, input, config$1);
    func.schema = schema;
    func.config = config$1;
    return func;
}
//#endregion
//#region src/methods/parser/parserAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function parserAsync(schema, config$1) {
    const func = (input)=>parseAsync(schema, input, config$1);
    func.schema = schema;
    func.config = config$1;
    return func;
}
//#endregion
//#region src/methods/partial/partial.ts
/* @__NO_SIDE_EFFECTS__ */ function partial(schema, keys) {
    const entries$1 = {};
    for(const key in schema.entries)entries$1[key] = !keys || keys.includes(key) ? /* @__PURE__ */ optional(schema.entries[key]) : schema.entries[key];
    return {
        ...schema,
        entries: entries$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        }
    };
}
//#endregion
//#region src/methods/partial/partialAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function partialAsync(schema, keys) {
    const entries$1 = {};
    for(const key in schema.entries)entries$1[key] = !keys || keys.includes(key) ? /* @__PURE__ */ optionalAsync(schema.entries[key]) : schema.entries[key];
    return {
        ...schema,
        entries: entries$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        }
    };
}
//#endregion
//#region src/methods/pick/pick.ts
/**
* Creates a modified copy of an object schema that contains only the selected
* entries.
*
* @param schema The schema to pick from.
* @param keys The selected entries.
*
* @returns An object schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function pick(schema, keys) {
    const entries$1 = {};
    for (const key of keys)entries$1[key] = schema.entries[key];
    return {
        ...schema,
        entries: entries$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        }
    };
}
//#endregion
//#region src/methods/pipe/pipe.ts
/* @__NO_SIDE_EFFECTS__ */ function pipe(...pipe$1) {
    return {
        ...pipe$1[0],
        pipe: pipe$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        "~run" (dataset, config$1) {
            for (const item of pipe$1)if (item.kind !== "metadata") {
                if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
                    dataset.typed = false;
                    break;
                }
                if (!dataset.issues || !config$1.abortEarly && !config$1.abortPipeEarly) dataset = item["~run"](dataset, config$1);
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/methods/pipe/pipeAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function pipeAsync(...pipe$1) {
    return {
        ...pipe$1[0],
        pipe: pipe$1,
        async: true,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        },
        async "~run" (dataset, config$1) {
            for (const item of pipe$1)if (item.kind !== "metadata") {
                if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
                    dataset.typed = false;
                    break;
                }
                if (!dataset.issues || !config$1.abortEarly && !config$1.abortPipeEarly) dataset = await item["~run"](dataset, config$1);
            }
            return dataset;
        }
    };
}
//#endregion
//#region src/methods/required/required.ts
/* @__NO_SIDE_EFFECTS__ */ function required(schema, arg2, arg3) {
    const keys = Array.isArray(arg2) ? arg2 : void 0;
    const message$1 = Array.isArray(arg2) ? arg3 : arg2;
    const entries$1 = {};
    for(const key in schema.entries)entries$1[key] = !keys || keys.includes(key) ? /* @__PURE__ */ nonOptional(schema.entries[key], message$1) : schema.entries[key];
    return {
        ...schema,
        entries: entries$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        }
    };
}
//#endregion
//#region src/methods/required/requiredAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function requiredAsync(schema, arg2, arg3) {
    const keys = Array.isArray(arg2) ? arg2 : void 0;
    const message$1 = Array.isArray(arg2) ? arg3 : arg2;
    const entries$1 = {};
    for(const key in schema.entries)entries$1[key] = !keys || keys.includes(key) ? /* @__PURE__ */ nonOptionalAsync(schema.entries[key], message$1) : schema.entries[key];
    return {
        ...schema,
        entries: entries$1,
        get "~standard" () {
            return /* @__PURE__ */ _getStandardProps(this);
        }
    };
}
//#endregion
//#region src/methods/safeParse/safeParse.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parse result.
*/ /* @__NO_SIDE_EFFECTS__ */ function safeParse(schema, input, config$1) {
    const dataset = schema["~run"]({
        value: input
    }, /* @__PURE__ */ getGlobalConfig(config$1));
    return {
        typed: dataset.typed,
        success: !dataset.issues,
        output: dataset.value,
        issues: dataset.issues
    };
}
//#endregion
//#region src/methods/safeParse/safeParseAsync.ts
/**
* Parses an unknown input based on a schema.
*
* @param schema The schema to be used.
* @param input The input to be parsed.
* @param config The parse configuration.
*
* @returns The parse result.
*/ /* @__NO_SIDE_EFFECTS__ */ async function safeParseAsync(schema, input, config$1) {
    const dataset = await schema["~run"]({
        value: input
    }, /* @__PURE__ */ getGlobalConfig(config$1));
    return {
        typed: dataset.typed,
        success: !dataset.issues,
        output: dataset.value,
        issues: dataset.issues
    };
}
//#endregion
//#region src/methods/safeParser/safeParser.ts
/* @__NO_SIDE_EFFECTS__ */ function safeParser(schema, config$1) {
    const func = (input)=>/* @__PURE__ */ safeParse(schema, input, config$1);
    func.schema = schema;
    func.config = config$1;
    return func;
}
//#endregion
//#region src/methods/safeParser/safeParserAsync.ts
/* @__NO_SIDE_EFFECTS__ */ function safeParserAsync(schema, config$1) {
    const func = (input)=>/* @__PURE__ */ safeParseAsync(schema, input, config$1);
    func.schema = schema;
    func.config = config$1;
    return func;
}
//#endregion
//#region src/methods/summarize/summarize.ts
/**
* Summarize the error messages of issues in a pretty-printable multi-line string.
*
* @param issues The list of issues.
*
* @returns A summary of the issues.
*
* @beta
*/ /* @__NO_SIDE_EFFECTS__ */ function summarize(issues) {
    let summary = "";
    for (const issue of issues){
        if (summary) summary += "\n";
        summary += `× ${issue.message}`;
        const dotPath = /* @__PURE__ */ getDotPath(issue);
        if (dotPath) summary += `\n  → at ${dotPath}`;
    }
    return summary;
}
//#endregion
//#region src/methods/unwrap/unwrap.ts
/**
* Unwraps the wrapped schema.
*
* @param schema The schema to be unwrapped.
*
* @returns The unwrapped schema.
*/ /* @__NO_SIDE_EFFECTS__ */ function unwrap(schema) {
    return schema.wrapped;
}
;
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Intent",
    ()=>$Intent,
    "Argument",
    ()=>Argument,
    "BCSBytes",
    ()=>BCSBytes,
    "Command",
    ()=>Command,
    "GasData",
    ()=>GasData,
    "IotaAddress",
    ()=>IotaAddress,
    "JsonU64",
    ()=>JsonU64,
    "NormalizedCallArg",
    ()=>NormalizedCallArg,
    "ObjectArg",
    ()=>ObjectArg,
    "ObjectID",
    ()=>ObjectID,
    "ObjectRef",
    ()=>ObjectRef,
    "OpenMoveTypeSignature",
    ()=>OpenMoveTypeSignature,
    "OpenMoveTypeSignatureBody",
    ()=>OpenMoveTypeSignatureBody,
    "StructTag",
    ()=>StructTag,
    "TransactionData",
    ()=>TransactionData,
    "TransactionExpiration",
    ()=>TransactionExpiration,
    "safeEnum",
    ()=>safeEnum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
;
function safeEnum(options) {
    const unionOptions = Object.entries(options).map(([key, value])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            [key]: value
        }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])(unionOptions), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])((value)=>({
            ...value,
            $kind: Object.keys(value)[0]
        })));
}
const IotaAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])((value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(value)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidIotaAddress"]));
const ObjectID = IotaAddress;
const BCSBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])();
const JsonU64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])((val)=>{
    try {
        BigInt(val);
        return BigInt(val) >= 0 && BigInt(val) <= 18446744073709551615n;
    } catch  {
        return false;
    }
}, "Invalid u64"));
const ObjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    objectId: IotaAddress,
    version: JsonU64,
    digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()
});
const Argument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        GasCoin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("pure"))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("object"))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        NestedResult: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
        ])
    })
]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])((value)=>({
        ...value,
        $kind: Object.keys(value)[0]
    })));
const GasData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64),
    owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(IotaAddress),
    payment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectRef))
});
const StructTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    // type_params in rust, should be updated to use camelCase
    typeParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
});
const OpenMoveTypeSignatureBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("address"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("bool"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u8"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u16"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u32"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u64"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u128"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("u256"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        vector: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>OpenMoveTypeSignatureBody)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        datatype: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            package: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
            module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
            typeParameters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>OpenMoveTypeSignatureBody))
        })
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        typeParameter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    })
]);
const OpenMoveTypeSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("&"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("&mut")
    ])),
    body: OpenMoveTypeSignatureBody
});
const ProgrammableMoveCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    package: ObjectID,
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    function: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    // snake case in rust
    typeArguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    arguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument),
    _argumentTypes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(OpenMoveTypeSignature)))
});
const $Intent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        Argument,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    ])),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])())
});
const Command = safeEnum({
    MoveCall: ProgrammableMoveCall,
    TransferObjects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument),
        address: Argument
    }),
    SplitCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        coin: Argument,
        amounts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    MergeCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        destination: Argument,
        sources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Publish: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(BCSBytes),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectID)
    }),
    MakeMoveVec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        elements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Upgrade: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(BCSBytes),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectID),
        package: ObjectID,
        ticket: Argument
    }),
    $Intent
});
const ObjectArg = safeEnum({
    ImmOrOwnedObject: ObjectRef,
    SharedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: ObjectID,
        // snake case in rust
        initialSharedVersion: JsonU64,
        mutable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])()
    }),
    Receiving: ObjectRef
});
const CallArg = safeEnum({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bytes: BCSBytes
    }),
    UnresolvedPure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])()
    }),
    UnresolvedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: ObjectID,
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64)),
        digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())),
        initialSharedVersion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(JsonU64))
    })
});
const NormalizedCallArg = safeEnum({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bytes: BCSBytes
    })
});
const TransactionExpiration = safeEnum({
    None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true),
    Epoch: JsonU64
});
const TransactionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(2),
    sender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(IotaAddress),
    expiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(TransactionExpiration),
    gasData: GasData,
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(CallArg),
    commands: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Command)
});
;
 //# sourceMappingURL=internal.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Commands.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Commands",
    ()=>Commands,
    "UpgradePolicy",
    ()=>UpgradePolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
;
;
;
;
var UpgradePolicy = /* @__PURE__ */ ((UpgradePolicy2)=>{
    UpgradePolicy2[UpgradePolicy2["COMPATIBLE"] = 0] = "COMPATIBLE";
    UpgradePolicy2[UpgradePolicy2["ADDITIVE"] = 128] = "ADDITIVE";
    UpgradePolicy2[UpgradePolicy2["DEP_ONLY"] = 192] = "DEP_ONLY";
    return UpgradePolicy2;
})(UpgradePolicy || {});
const Commands = {
    MoveCall (input) {
        const [pkg, mod = "", fn = ""] = "target" in input ? input.target.split("::") : [
            input.package,
            input.module,
            input.function
        ];
        return {
            $kind: "MoveCall",
            MoveCall: {
                package: pkg,
                module: mod,
                function: fn,
                typeArguments: input.typeArguments ?? [],
                arguments: input.arguments ?? []
            }
        };
    },
    TransferObjects (objects, address) {
        return {
            $kind: "TransferObjects",
            TransferObjects: {
                objects: objects.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o)),
                address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], address)
            }
        };
    },
    SplitCoins (coin, amounts) {
        return {
            $kind: "SplitCoins",
            SplitCoins: {
                coin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], coin),
                amounts: amounts.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o))
            }
        };
    },
    MergeCoins (destination, sources) {
        return {
            $kind: "MergeCoins",
            MergeCoins: {
                destination: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], destination),
                sources: sources.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o))
            }
        };
    },
    Publish ({ modules, dependencies }) {
        return {
            $kind: "Publish",
            Publish: {
                modules: modules.map((module)=>typeof module === "string" ? module : (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(new Uint8Array(module))),
                dependencies: dependencies.map((dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])(dep))
            }
        };
    },
    Upgrade ({ modules, dependencies, package: packageId, ticket }) {
        return {
            $kind: "Upgrade",
            Upgrade: {
                modules: modules.map((module)=>typeof module === "string" ? module : (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(new Uint8Array(module))),
                dependencies: dependencies.map((dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])(dep)),
                package: packageId,
                ticket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], ticket)
            }
        };
    },
    MakeMoveVec ({ type, elements }) {
        return {
            $kind: "MakeMoveVec",
            MakeMoveVec: {
                type: type ?? null,
                elements: elements.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o))
            }
        };
    },
    Intent ({ name, inputs = {}, data = {} }) {
        return {
            $kind: "$Intent",
            $Intent: {
                name,
                inputs: Object.fromEntries(Object.entries(inputs).map(([key, value])=>[
                        key,
                        Array.isArray(value) ? value.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], o)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], value)
                    ])),
                data
            }
        };
    }
};
;
 //# sourceMappingURL=Commands.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NormalizedCallArg",
    ()=>NormalizedCallArg,
    "ObjectRef",
    ()=>ObjectRef,
    "SerializedTransactionDataV1",
    ()=>SerializedTransactionDataV1,
    "StructTag",
    ()=>StructTag,
    "TransactionArgument",
    ()=>TransactionArgument,
    "TypeTag",
    ()=>TypeTag,
    "serializeV1TransactionData",
    ()=>serializeV1TransactionData,
    "transactionDataFromV1",
    ()=>transactionDataFromV1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$type$2d$tag$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/bcs/type-tag-serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
;
;
;
;
const ObjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigint"])()
    ])
});
const ObjectArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeEnum"])({
    ImmOrOwned: ObjectRef,
    Shared: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        initialSharedVersion: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"],
        mutable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])()
    }),
    Receiving: ObjectRef
});
const NormalizedCallArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeEnum"])({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()))
});
const TransactionInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Input"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])(),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("object"))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Input"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])(),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("pure")
    })
]);
const TransactionExpiration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        Epoch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    })
]);
const StringEncodedBigint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigint"])()
]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])((val)=>{
    if (![
        "string",
        "number",
        "bigint"
    ].includes(typeof val)) return false;
    try {
        BigInt(val);
        return true;
    } catch  {
        return false;
    }
}));
const TypeTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bool: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u8: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u64: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u128: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        signer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        vector: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>TypeTag)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        struct: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>StructTag)
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u16: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u32: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        u256: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
    })
]);
const StructTag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    typeParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TypeTag)
});
const GasConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])(StringEncodedBigint),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])(StringEncodedBigint),
    payment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(ObjectRef)),
    owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
});
const TransactionArgumentTypes = [
    TransactionInput,
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("GasCoin")
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Result"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("NestedResult"),
        index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        resultIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    })
];
const TransactionArgument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    ...TransactionArgumentTypes
]);
const MoveCallTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("MoveCall"),
    target: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["check"])((target)=>target.split("::").length === 3)),
    typeArguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    arguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const TransferObjectsTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("TransferObjects"),
    objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument),
    address: TransactionArgument
});
const SplitCoinsTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("SplitCoins"),
    coin: TransactionArgument,
    amounts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const MergeCoinsTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("MergeCoins"),
    destination: TransactionArgument,
    sources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const MakeMoveVecTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("MakeMoveVec"),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            Some: TypeTag
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true))
        })
    ]),
    objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionArgument)
});
const PublishTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Publish"),
    modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()))),
    dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
});
const UpgradeTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])("Upgrade"),
    modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()))),
    dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    packageId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    ticket: TransactionArgument
});
const TransactionTypes = [
    MoveCallTransaction,
    TransferObjectsTransaction,
    SplitCoinsTransaction,
    MergeCoinsTransaction,
    PublishTransaction,
    UpgradeTransaction,
    MakeMoveVecTransaction
];
const TransactionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
    ...TransactionTypes
]);
const SerializedTransactionDataV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(1),
    sender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    expiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(TransactionExpiration),
    gasConfig: GasConfig,
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionInput),
    transactions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(TransactionType)
});
function serializeV1TransactionData(transactionData) {
    const inputs = transactionData.inputs.map((input, index)=>{
        if (input.Object) {
            return {
                kind: "Input",
                index,
                value: {
                    Object: input.Object.ImmOrOwnedObject ? {
                        ImmOrOwned: input.Object.ImmOrOwnedObject
                    } : input.Object.Receiving ? {
                        Receiving: {
                            digest: input.Object.Receiving.digest,
                            version: input.Object.Receiving.version,
                            objectId: input.Object.Receiving.objectId
                        }
                    } : {
                        Shared: {
                            mutable: input.Object.SharedObject.mutable,
                            initialSharedVersion: input.Object.SharedObject.initialSharedVersion,
                            objectId: input.Object.SharedObject.objectId
                        }
                    }
                },
                type: "object"
            };
        }
        if (input.Pure) {
            return {
                kind: "Input",
                index,
                value: {
                    Pure: Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(input.Pure.bytes))
                },
                type: "pure"
            };
        }
        if (input.UnresolvedPure) {
            return {
                kind: "Input",
                type: "pure",
                index,
                value: input.UnresolvedPure.value
            };
        }
        if (input.UnresolvedObject) {
            return {
                kind: "Input",
                type: "object",
                index,
                value: input.UnresolvedObject.objectId
            };
        }
        throw new Error("Invalid input");
    });
    return {
        version: 1,
        sender: transactionData.sender ?? void 0,
        expiration: transactionData.expiration?.$kind === "Epoch" ? {
            Epoch: Number(transactionData.expiration.Epoch)
        } : transactionData.expiration ? {
            None: true
        } : null,
        gasConfig: {
            owner: transactionData.gasData.owner ?? void 0,
            budget: transactionData.gasData.budget ?? void 0,
            price: transactionData.gasData.price ?? void 0,
            payment: transactionData.gasData.payment ?? void 0
        },
        inputs,
        transactions: transactionData.commands.map((command)=>{
            if (command.MakeMoveVec) {
                return {
                    kind: "MakeMoveVec",
                    type: command.MakeMoveVec.type === null ? {
                        None: true
                    } : {
                        Some: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$type$2d$tag$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeTagSerializer"].parseFromStr(command.MakeMoveVec.type)
                    },
                    objects: command.MakeMoveVec.elements.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.MergeCoins) {
                return {
                    kind: "MergeCoins",
                    destination: convertTransactionArgument(command.MergeCoins.destination, inputs),
                    sources: command.MergeCoins.sources.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.MoveCall) {
                return {
                    kind: "MoveCall",
                    target: `${command.MoveCall.package}::${command.MoveCall.module}::${command.MoveCall.function}`,
                    typeArguments: command.MoveCall.typeArguments,
                    arguments: command.MoveCall.arguments.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.Publish) {
                return {
                    kind: "Publish",
                    modules: command.Publish.modules.map((mod)=>Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(mod))),
                    dependencies: command.Publish.dependencies
                };
            }
            if (command.SplitCoins) {
                return {
                    kind: "SplitCoins",
                    coin: convertTransactionArgument(command.SplitCoins.coin, inputs),
                    amounts: command.SplitCoins.amounts.map((arg)=>convertTransactionArgument(arg, inputs))
                };
            }
            if (command.TransferObjects) {
                return {
                    kind: "TransferObjects",
                    objects: command.TransferObjects.objects.map((arg)=>convertTransactionArgument(arg, inputs)),
                    address: convertTransactionArgument(command.TransferObjects.address, inputs)
                };
            }
            if (command.Upgrade) {
                return {
                    kind: "Upgrade",
                    modules: command.Upgrade.modules.map((mod)=>Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(mod))),
                    dependencies: command.Upgrade.dependencies,
                    packageId: command.Upgrade.package,
                    ticket: convertTransactionArgument(command.Upgrade.ticket, inputs)
                };
            }
            throw new Error(`Unknown transaction ${Object.keys(command)}`);
        })
    };
}
function convertTransactionArgument(arg, inputs) {
    if (arg.$kind === "GasCoin") {
        return {
            kind: "GasCoin"
        };
    }
    if (arg.$kind === "Result") {
        return {
            kind: "Result",
            index: arg.Result
        };
    }
    if (arg.$kind === "NestedResult") {
        return {
            kind: "NestedResult",
            index: arg.NestedResult[0],
            resultIndex: arg.NestedResult[1]
        };
    }
    if (arg.$kind === "Input") {
        return inputs[arg.Input];
    }
    throw new Error(`Invalid argument ${Object.keys(arg)}`);
}
function transactionDataFromV1(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], {
        version: 2,
        sender: data.sender ?? null,
        expiration: data.expiration ? "Epoch" in data.expiration ? {
            Epoch: data.expiration.Epoch
        } : {
            None: true
        } : null,
        gasData: {
            owner: data.gasConfig.owner ?? null,
            budget: data.gasConfig.budget?.toString() ?? null,
            price: data.gasConfig.price?.toString() ?? null,
            payment: data.gasConfig.payment?.map((ref)=>({
                    digest: ref.digest,
                    objectId: ref.objectId,
                    version: ref.version.toString()
                })) ?? null
        },
        inputs: data.inputs.map((input)=>{
            if (input.kind === "Input") {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(NormalizedCallArg, input.value)) {
                    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(NormalizedCallArg, input.value);
                    if (value.Object) {
                        if (value.Object.ImmOrOwned) {
                            return {
                                Object: {
                                    ImmOrOwnedObject: {
                                        objectId: value.Object.ImmOrOwned.objectId,
                                        version: String(value.Object.ImmOrOwned.version),
                                        digest: value.Object.ImmOrOwned.digest
                                    }
                                }
                            };
                        }
                        if (value.Object.Shared) {
                            return {
                                Object: {
                                    SharedObject: {
                                        mutable: value.Object.Shared.mutable ?? null,
                                        initialSharedVersion: value.Object.Shared.initialSharedVersion,
                                        objectId: value.Object.Shared.objectId
                                    }
                                }
                            };
                        }
                        if (value.Object.Receiving) {
                            return {
                                Object: {
                                    Receiving: {
                                        digest: value.Object.Receiving.digest,
                                        version: String(value.Object.Receiving.version),
                                        objectId: value.Object.Receiving.objectId
                                    }
                                }
                            };
                        }
                        throw new Error("Invalid object input");
                    }
                    return {
                        Pure: {
                            bytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(new Uint8Array(value.Pure))
                        }
                    };
                }
                if (input.type === "object") {
                    return {
                        UnresolvedObject: {
                            objectId: input.value
                        }
                    };
                }
                return {
                    UnresolvedPure: {
                        value: input.value
                    }
                };
            }
            throw new Error("Invalid input");
        }),
        commands: data.transactions.map((transaction)=>{
            switch(transaction.kind){
                case "MakeMoveVec":
                    return {
                        MakeMoveVec: {
                            type: "Some" in transaction.type ? __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$type$2d$tag$2d$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeTagSerializer"].tagToString(transaction.type.Some) : null,
                            elements: transaction.objects.map((arg)=>parseV1TransactionArgument(arg))
                        }
                    };
                case "MergeCoins":
                    {
                        return {
                            MergeCoins: {
                                destination: parseV1TransactionArgument(transaction.destination),
                                sources: transaction.sources.map((arg)=>parseV1TransactionArgument(arg))
                            }
                        };
                    }
                case "MoveCall":
                    {
                        const [pkg, mod, fn] = transaction.target.split("::");
                        return {
                            MoveCall: {
                                package: pkg,
                                module: mod,
                                function: fn,
                                typeArguments: transaction.typeArguments,
                                arguments: transaction.arguments.map((arg)=>parseV1TransactionArgument(arg))
                            }
                        };
                    }
                case "Publish":
                    {
                        return {
                            Publish: {
                                modules: transaction.modules.map((mod)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(Uint8Array.from(mod))),
                                dependencies: transaction.dependencies
                            }
                        };
                    }
                case "SplitCoins":
                    {
                        return {
                            SplitCoins: {
                                coin: parseV1TransactionArgument(transaction.coin),
                                amounts: transaction.amounts.map((arg)=>parseV1TransactionArgument(arg))
                            }
                        };
                    }
                case "TransferObjects":
                    {
                        return {
                            TransferObjects: {
                                objects: transaction.objects.map((arg)=>parseV1TransactionArgument(arg)),
                                address: parseV1TransactionArgument(transaction.address)
                            }
                        };
                    }
                case "Upgrade":
                    {
                        return {
                            Upgrade: {
                                modules: transaction.modules.map((mod)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(Uint8Array.from(mod))),
                                dependencies: transaction.dependencies,
                                package: transaction.packageId,
                                ticket: parseV1TransactionArgument(transaction.ticket)
                            }
                        };
                    }
            }
            throw new Error(`Unknown transaction ${Object.keys(transaction)}`);
        })
    });
}
function parseV1TransactionArgument(arg) {
    switch(arg.kind){
        case "GasCoin":
            {
                return {
                    GasCoin: true
                };
            }
        case "Result":
            return {
                Result: arg.index
            };
        case "NestedResult":
            {
                return {
                    NestedResult: [
                        arg.index,
                        arg.resultIndex
                    ]
                };
            }
        case "Input":
            {
                return {
                    Input: arg.index
                };
            }
    }
}
;
 //# sourceMappingURL=v1.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SerializedTransactionDataV2",
    ()=>SerializedTransactionDataV2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
;
;
function enumUnion(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])(Object.entries(options).map(([key, value])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
            [key]: value
        })));
}
const Argument = enumUnion({
    GasCoin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true),
    Input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
    Result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
    NestedResult: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"])())
    ])
});
const GasData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    budget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]),
    owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IotaAddress"]),
    payment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"]))
});
const ProgrammableMoveCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    package: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
    module: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    function: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    // snake case in rust
    typeArguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
    arguments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
});
const $Intent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(),
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"])([
        Argument,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    ])),
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])())
});
const Command = enumUnion({
    MoveCall: ProgrammableMoveCall,
    TransferObjects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objects: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument),
        address: Argument
    }),
    SplitCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        coin: Argument,
        amounts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    MergeCoins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        destination: Argument,
        sources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Publish: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BCSBytes"]),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"])
    }),
    MakeMoveVec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])()),
        elements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Argument)
    }),
    Upgrade: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BCSBytes"]),
        dependencies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"]),
        package: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        ticket: Argument
    }),
    $Intent
});
const ObjectArg = enumUnion({
    ImmOrOwnedObject: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"],
    SharedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        // snake case in rust
        initialSharedVersion: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"],
        mutable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])()
    }),
    Receiving: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"]
});
const CallArg = enumUnion({
    Object: ObjectArg,
    Pure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        bytes: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BCSBytes"]
    }),
    UnresolvedPure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])()
    }),
    UnresolvedObject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
        objectId: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectID"],
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"])),
        digest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())),
        initialSharedVersion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullable"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]))
    })
});
const TransactionExpiration = enumUnion({
    None: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(true),
    Epoch: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonU64"]
});
const SerializedTransactionDataV2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["literal"])(2),
    sender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IotaAddress"]),
    expiration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"])(TransactionExpiration),
    gasData: GasData,
    inputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(CallArg),
    commands: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"])(Command)
});
;
 //# sourceMappingURL=v2.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Inputs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inputs",
    ()=>Inputs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
;
function Pure(data) {
    return {
        $kind: "Pure",
        Pure: {
            bytes: data instanceof Uint8Array ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(data) : data.toBase64()
        }
    };
}
const Inputs = {
    Pure,
    ObjectRef ({ objectId, digest, version }) {
        return {
            $kind: "Object",
            Object: {
                $kind: "ImmOrOwnedObject",
                ImmOrOwnedObject: {
                    digest,
                    version,
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(objectId)
                }
            }
        };
    },
    SharedObjectRef ({ objectId, mutable, initialSharedVersion }) {
        return {
            $kind: "Object",
            Object: {
                $kind: "SharedObject",
                SharedObject: {
                    mutable,
                    initialSharedVersion,
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(objectId)
                }
            }
        };
    },
    ReceivingRef ({ objectId, digest, version }) {
        return {
            $kind: "Object",
            Object: {
                $kind: "Receiving",
                Receiving: {
                    digest,
                    version,
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(objectId)
                }
            }
        };
    }
};
;
 //# sourceMappingURL=Inputs.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IOTA_CLOCK_OBJECT_ID",
    ()=>IOTA_CLOCK_OBJECT_ID,
    "IOTA_DECIMALS",
    ()=>IOTA_DECIMALS,
    "IOTA_FRAMEWORK_ADDRESS",
    ()=>IOTA_FRAMEWORK_ADDRESS,
    "IOTA_SYSTEM_ADDRESS",
    ()=>IOTA_SYSTEM_ADDRESS,
    "IOTA_SYSTEM_MODULE_NAME",
    ()=>IOTA_SYSTEM_MODULE_NAME,
    "IOTA_SYSTEM_STATE_OBJECT_ID",
    ()=>IOTA_SYSTEM_STATE_OBJECT_ID,
    "IOTA_TYPE_ARG",
    ()=>IOTA_TYPE_ARG,
    "MOVE_STDLIB_ADDRESS",
    ()=>MOVE_STDLIB_ADDRESS,
    "NANOS_PER_IOTA",
    ()=>NANOS_PER_IOTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
const IOTA_DECIMALS = 9;
const NANOS_PER_IOTA = BigInt(1e9);
const MOVE_STDLIB_ADDRESS = "0x1";
const IOTA_FRAMEWORK_ADDRESS = "0x2";
const IOTA_SYSTEM_ADDRESS = "0x3";
const IOTA_CLOCK_OBJECT_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])("0x6");
const IOTA_SYSTEM_MODULE_NAME = "iota_system";
const IOTA_TYPE_ARG = `${IOTA_FRAMEWORK_ADDRESS}::iota::IOTA`;
const IOTA_SYSTEM_STATE_OBJECT_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])("0x5");
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/serializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPureBcsSchema",
    ()=>getPureBcsSchema,
    "isTxContext",
    ()=>isTxContext,
    "normalizedTypeToMoveTypeSignature",
    ()=>normalizedTypeToMoveTypeSignature,
    "pureBcsSchemaFromOpenMoveTypeSignatureBody",
    ()=>pureBcsSchemaFromOpenMoveTypeSignatureBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
;
;
const OBJECT_MODULE_NAME = "object";
const ID_STRUCT_NAME = "ID";
const STD_ASCII_MODULE_NAME = "ascii";
const STD_ASCII_STRUCT_NAME = "String";
const STD_UTF8_MODULE_NAME = "string";
const STD_UTF8_STRUCT_NAME = "String";
const STD_OPTION_MODULE_NAME = "option";
const STD_OPTION_STRUCT_NAME = "Option";
function isTxContext(param) {
    const struct = typeof param.body === "object" && "datatype" in param.body ? param.body.datatype : null;
    return !!struct && (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(struct.package) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])("0x2") && struct.module === "tx_context" && struct.type === "TxContext";
}
function getPureBcsSchema(typeSignature) {
    if (typeof typeSignature === "string") {
        switch(typeSignature){
            case "address":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
            case "bool":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Bool;
            case "u8":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8;
            case "u16":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U16;
            case "u32":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U32;
            case "u64":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64;
            case "u128":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U128;
            case "u256":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U256;
            default:
                throw new Error(`Unknown type signature ${typeSignature}`);
        }
    }
    if ("vector" in typeSignature) {
        if (typeSignature.vector === "u8") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8).transform({
                input: (val)=>typeof val === "string" ? new TextEncoder().encode(val) : val,
                output: (val)=>val
            });
        }
        const type = getPureBcsSchema(typeSignature.vector);
        return type ? __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(type) : null;
    }
    if ("datatype" in typeSignature) {
        const pkg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(typeSignature.datatype.package);
        if (pkg === (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOVE_STDLIB_ADDRESS"])) {
            if (typeSignature.datatype.module === STD_ASCII_MODULE_NAME && typeSignature.datatype.type === STD_ASCII_STRUCT_NAME) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].String;
            }
            if (typeSignature.datatype.module === STD_UTF8_MODULE_NAME && typeSignature.datatype.type === STD_UTF8_STRUCT_NAME) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].String;
            }
            if (typeSignature.datatype.module === STD_OPTION_MODULE_NAME && typeSignature.datatype.type === STD_OPTION_STRUCT_NAME) {
                const type = getPureBcsSchema(typeSignature.datatype.typeParameters[0]);
                return type ? __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(type) : null;
            }
        }
        if (pkg === (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOTA_FRAMEWORK_ADDRESS"]) && typeSignature.datatype.module === OBJECT_MODULE_NAME && typeSignature.datatype.type === ID_STRUCT_NAME) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
        }
    }
    return null;
}
function normalizedTypeToMoveTypeSignature(type) {
    if (typeof type === "object" && "Reference" in type) {
        return {
            ref: "&",
            body: normalizedTypeToMoveTypeSignatureBody(type.Reference)
        };
    }
    if (typeof type === "object" && "MutableReference" in type) {
        return {
            ref: "&mut",
            body: normalizedTypeToMoveTypeSignatureBody(type.MutableReference)
        };
    }
    return {
        ref: null,
        body: normalizedTypeToMoveTypeSignatureBody(type)
    };
}
function normalizedTypeToMoveTypeSignatureBody(type) {
    if (typeof type === "string") {
        switch(type){
            case "Address":
                return "address";
            case "Bool":
                return "bool";
            case "U8":
                return "u8";
            case "U16":
                return "u16";
            case "U32":
                return "u32";
            case "U64":
                return "u64";
            case "U128":
                return "u128";
            case "U256":
                return "u256";
            default:
                throw new Error(`Unexpected type ${type}`);
        }
    }
    if ("Vector" in type) {
        return {
            vector: normalizedTypeToMoveTypeSignatureBody(type.Vector)
        };
    }
    if ("Struct" in type) {
        return {
            datatype: {
                package: type.Struct.address,
                module: type.Struct.module,
                type: type.Struct.name,
                typeParameters: type.Struct.typeArguments.map(normalizedTypeToMoveTypeSignatureBody)
            }
        };
    }
    if ("TypeParameter" in type) {
        return {
            typeParameter: type.TypeParameter
        };
    }
    throw new Error(`Unexpected type ${JSON.stringify(type)}`);
}
function pureBcsSchemaFromOpenMoveTypeSignatureBody(typeSignature) {
    if (typeof typeSignature === "string") {
        switch(typeSignature){
            case "address":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
            case "bool":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Bool;
            case "u8":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8;
            case "u16":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U16;
            case "u32":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U32;
            case "u64":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64;
            case "u128":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U128;
            case "u256":
                return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U256;
            default:
                throw new Error(`Unknown type signature ${typeSignature}`);
        }
    }
    if ("vector" in typeSignature) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(pureBcsSchemaFromOpenMoveTypeSignatureBody(typeSignature.vector));
    }
    throw new Error(`Expected pure typeSignature, but got ${JSON.stringify(typeSignature)}`);
}
;
 //# sourceMappingURL=serializer.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/json-rpc-resolver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClient",
    ()=>getClient,
    "resolveTransactionData",
    ()=>resolveTransactionData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Inputs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/serializer.js [app-client] (ecmascript)");
;
;
;
;
;
;
const MAX_OBJECTS_PER_FETCH = 50;
const GAS_SAFE_OVERHEAD = 1000n;
const MAX_GAS = 5e10;
async function resolveTransactionData(transactionData, options, next) {
    await normalizeInputs(transactionData, options);
    await resolveObjectReferences(transactionData, options);
    if (!options.onlyTransactionKind) {
        await setGasPrice(transactionData, options);
        await setGasBudget(transactionData, options);
        await setGasPayment(transactionData, options);
    }
    await validate(transactionData);
    return await next();
}
async function setGasPrice(transactionData, options) {
    if (!transactionData.gasConfig.price) {
        transactionData.gasConfig.price = String(await getClient(options).getReferenceGasPrice());
    }
}
async function setGasBudget(transactionData, options) {
    if (transactionData.gasConfig.budget) {
        return;
    }
    const dryRunResult = await getClient(options).dryRunTransactionBlock({
        transactionBlock: transactionData.build({
            overrides: {
                gasData: {
                    budget: String(MAX_GAS),
                    payment: []
                }
            }
        })
    });
    if (dryRunResult.effects.status.status !== "success") {
        throw new Error(`Dry run failed, could not automatically determine a budget: ${dryRunResult.effects.status.error}`, {
            cause: dryRunResult
        });
    }
    const safeOverhead = GAS_SAFE_OVERHEAD * BigInt(transactionData.gasConfig.price || 1n);
    const baseComputationCostWithOverhead = BigInt(dryRunResult.effects.gasUsed.computationCost) + safeOverhead;
    const gasBudget = baseComputationCostWithOverhead + BigInt(dryRunResult.effects.gasUsed.storageCost) - BigInt(dryRunResult.effects.gasUsed.storageRebate);
    transactionData.gasConfig.budget = String(gasBudget > baseComputationCostWithOverhead ? gasBudget : baseComputationCostWithOverhead);
}
async function setGasPayment(transactionData, options) {
    if (!transactionData.gasConfig.payment) {
        const coins = await getClient(options).getCoins({
            owner: transactionData.gasConfig.owner || transactionData.sender,
            coinType: __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOTA_TYPE_ARG"]
        });
        const paymentCoins = coins.data.filter((coin)=>{
            const matchingInput = transactionData.inputs.find((input)=>{
                if (input.Object?.ImmOrOwnedObject) {
                    return coin.coinObjectId === input.Object.ImmOrOwnedObject.objectId;
                }
                return false;
            });
            return !matchingInput;
        }).map((coin)=>({
                objectId: coin.coinObjectId,
                digest: coin.digest,
                version: coin.version
            }));
        if (!paymentCoins.length) {
            throw new Error("No valid gas coins found for the transaction.");
        }
        transactionData.gasConfig.payment = paymentCoins.map((payment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"], payment));
    }
}
async function resolveObjectReferences(transactionData, options) {
    const objectsToResolve = transactionData.inputs.filter((input)=>{
        return input.UnresolvedObject && !(input.UnresolvedObject.version || input.UnresolvedObject?.initialSharedVersion);
    });
    const dedupedIds = [
        ...new Set(objectsToResolve.map((input)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaObjectId"])(input.UnresolvedObject.objectId)))
    ];
    const objectChunks = dedupedIds.length ? chunk(dedupedIds, MAX_OBJECTS_PER_FETCH) : [];
    const resolvedObjects = /* @__PURE__ */ new Map();
    const erroredObjects = /* @__PURE__ */ new Map();
    await Promise.all(objectChunks.map(async (chunk2)=>{
        const chunkObjects = await getClient(options).multiGetObjects({
            ids: chunk2,
            options: {
                showOwner: true
            }
        });
        for (const object of chunkObjects){
            const objectId = object.data?.objectId;
            if (objectId) {
                if (object.error || !object.data) {
                    erroredObjects.set(objectId, object.error);
                    return;
                }
                const owner = object.data.owner;
                const initialSharedVersion = owner && typeof owner === "object" && "Shared" in owner ? owner.Shared.initial_shared_version : null;
                resolvedObjects.set(objectId, {
                    objectId,
                    digest: object.data.digest,
                    version: object.data.version,
                    initialSharedVersion
                });
            }
        }
    }));
    if (erroredObjects.size > 0) {
        throw new Error(`The following input objects are invalid: ${Array.from(erroredObjects).join(", ")}`);
    }
    for (const [index, input] of transactionData.inputs.entries()){
        if (!input.UnresolvedObject) {
            continue;
        }
        let updated;
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(input.UnresolvedObject.objectId);
        const object = resolvedObjects.get(id);
        if (input.UnresolvedObject.initialSharedVersion ?? object?.initialSharedVersion) {
            updated = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].SharedObjectRef({
                objectId: id,
                initialSharedVersion: input.UnresolvedObject.initialSharedVersion || object?.initialSharedVersion,
                mutable: isUsedAsMutable(transactionData, index)
            });
        } else if (isUsedAsReceiving(transactionData, index)) {
            updated = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ReceivingRef({
                objectId: id,
                digest: input.UnresolvedObject.digest ?? object?.digest,
                version: input.UnresolvedObject.version ?? object?.version
            });
        }
        transactionData.inputs[transactionData.inputs.indexOf(input)] = updated ?? __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ObjectRef({
            objectId: id,
            digest: input.UnresolvedObject.digest ?? object?.digest,
            version: input.UnresolvedObject.version ?? object?.version
        });
    }
}
async function normalizeInputs(transactionData, options) {
    const { inputs, commands } = transactionData;
    const moveCallsToResolve = [];
    const moveFunctionsToResolve = /* @__PURE__ */ new Set();
    commands.forEach((command)=>{
        if (command.MoveCall) {
            if (command.MoveCall._argumentTypes) {
                return;
            }
            const inputs2 = command.MoveCall.arguments.map((arg)=>{
                if (arg.$kind === "Input") {
                    return transactionData.inputs[arg.Input];
                }
                return null;
            });
            const needsResolution = inputs2.some((input)=>input?.UnresolvedPure || input?.UnresolvedObject);
            if (needsResolution) {
                const functionName = `${command.MoveCall.package}::${command.MoveCall.module}::${command.MoveCall.function}`;
                moveFunctionsToResolve.add(functionName);
                moveCallsToResolve.push(command.MoveCall);
            }
        }
        switch(command.$kind){
            case "SplitCoins":
                command.SplitCoins.amounts.forEach((amount)=>{
                    normalizeRawArgument(amount, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64, transactionData);
                });
                break;
            case "TransferObjects":
                normalizeRawArgument(command.TransferObjects.address, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address, transactionData);
                break;
        }
    });
    const moveFunctionParameters = /* @__PURE__ */ new Map();
    if (moveFunctionsToResolve.size > 0) {
        const client = getClient(options);
        await Promise.all([
            ...moveFunctionsToResolve
        ].map(async (functionName)=>{
            const [packageId, moduleId, functionId] = functionName.split("::");
            const def = await client.getNormalizedMoveFunction({
                package: packageId,
                module: moduleId,
                function: functionId
            });
            moveFunctionParameters.set(functionName, def.parameters.map((param)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizedTypeToMoveTypeSignature"])(param)));
        }));
    }
    if (moveCallsToResolve.length) {
        await Promise.all(moveCallsToResolve.map(async (moveCall)=>{
            const parameters = moveFunctionParameters.get(`${moveCall.package}::${moveCall.module}::${moveCall.function}`);
            if (!parameters) {
                return;
            }
            const hasTxContext = parameters.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTxContext"])(parameters.at(-1));
            const params = hasTxContext ? parameters.slice(0, parameters.length - 1) : parameters;
            moveCall._argumentTypes = params;
        }));
    }
    commands.forEach((command)=>{
        if (!command.MoveCall) {
            return;
        }
        const moveCall = command.MoveCall;
        const fnName = `${moveCall.package}::${moveCall.module}::${moveCall.function}`;
        const params = moveCall._argumentTypes;
        if (!params) {
            return;
        }
        if (params.length !== command.MoveCall.arguments.length) {
            throw new Error(`Incorrect number of arguments for ${fnName}`);
        }
        params.forEach((param, i)=>{
            const arg = moveCall.arguments[i];
            if (arg.$kind !== "Input") return;
            const input = inputs[arg.Input];
            if (!input.UnresolvedPure && !input.UnresolvedObject) {
                return;
            }
            const inputValue = input.UnresolvedPure?.value ?? input.UnresolvedObject?.objectId;
            const inputIndex = inputs.indexOf(input);
            const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPureBcsSchema"])(param.body);
            if (schema) {
                arg.type = "pure";
                inputs[inputIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].Pure(schema.serialize(inputValue));
                return;
            }
            if (typeof inputValue !== "string") {
                throw new Error(`Expect the argument to be an object id string, got ${JSON.stringify(inputValue, null, 2)}`);
            }
            arg.type = "object";
            const unresolvedObject = input.UnresolvedPure ? {
                $kind: "UnresolvedObject",
                UnresolvedObject: {
                    objectId: inputValue
                }
            } : input;
            inputs[inputIndex] = unresolvedObject;
        });
    });
}
function validate(transactionData) {
    transactionData.inputs.forEach((input, index)=>{
        if (input.$kind !== "Object" && input.$kind !== "Pure") {
            throw new Error(`Input at index ${index} has not been resolved.  Expected a Pure or Object input, but found ${JSON.stringify(input)}`);
        }
    });
}
function normalizeRawArgument(arg, schema, transactionData) {
    if (arg.$kind !== "Input") {
        return;
    }
    const input = transactionData.inputs[arg.Input];
    if (input.$kind !== "UnresolvedPure") {
        return;
    }
    transactionData.inputs[arg.Input] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].Pure(schema.serialize(input.UnresolvedPure.value));
}
function isUsedAsMutable(transactionData, index) {
    let usedAsMutable = false;
    transactionData.getInputUses(index, (arg, tx)=>{
        if (tx.MoveCall && tx.MoveCall._argumentTypes) {
            const argIndex = tx.MoveCall.arguments.indexOf(arg);
            usedAsMutable = tx.MoveCall._argumentTypes[argIndex].ref !== "&" || usedAsMutable;
        }
        if (tx.$kind === "MakeMoveVec" || tx.$kind === "MergeCoins" || tx.$kind === "SplitCoins") {
            usedAsMutable = true;
        }
    });
    return usedAsMutable;
}
function isUsedAsReceiving(transactionData, index) {
    let usedAsReceiving = false;
    transactionData.getInputUses(index, (arg, tx)=>{
        if (tx.MoveCall && tx.MoveCall._argumentTypes) {
            const argIndex = tx.MoveCall.arguments.indexOf(arg);
            usedAsReceiving = isReceivingType(tx.MoveCall._argumentTypes[argIndex]) || usedAsReceiving;
        }
    });
    return usedAsReceiving;
}
function isReceivingType(type) {
    if (typeof type.body !== "object" || !("datatype" in type.body)) {
        return false;
    }
    return type.body.datatype.package === "0x2" && type.body.datatype.module === "transfer" && type.body.datatype.type === "Receiving";
}
function getClient(options) {
    if (!options.client) {
        throw new Error(`No iota client passed to Transaction#build, but transaction data was not sufficient to build offline.`);
    }
    return options.client;
}
function chunk(arr, size) {
    return Array.from({
        length: Math.ceil(arr.length / size)
    }, (_, i)=>arr.slice(i * size, i * size + size));
}
;
 //# sourceMappingURL=json-rpc-resolver.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createObjectMethods",
    ()=>createObjectMethods
]);
function createObjectMethods(makeObject) {
    function object(value) {
        return makeObject(value);
    }
    object.system = ()=>object("0x5");
    object.clock = ()=>object("0x6");
    object.random = ()=>object("0x8");
    object.denyList = ()=>object("0x403");
    object.option = ({ type, value })=>(tx)=>tx.moveCall({
                typeArguments: [
                    type
                ],
                target: `0x1::option::${value === null ? "none" : "some"}`,
                arguments: value === null ? [] : [
                    tx.object(value)
                ]
            });
    return object;
}
;
 //# sourceMappingURL=object.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/pure.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPure",
    ()=>createPure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/bcs/dist/esm/bcs-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
;
;
function createPure(makePure) {
    function pure(typeOrSerializedValue, value) {
        if (typeof typeOrSerializedValue === "string") {
            return makePure(schemaFromName(typeOrSerializedValue).serialize(value));
        }
        if (typeOrSerializedValue instanceof Uint8Array || (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializedBcs"])(typeOrSerializedValue)) {
            return makePure(typeOrSerializedValue);
        }
        throw new Error("tx.pure must be called either a bcs type name, or a serialized bcs value");
    }
    pure.u8 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U8.serialize(value));
    pure.u16 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U16.serialize(value));
    pure.u32 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U32.serialize(value));
    pure.u64 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U64.serialize(value));
    pure.u128 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U128.serialize(value));
    pure.u256 = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].U256.serialize(value));
    pure.bool = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Bool.serialize(value));
    pure.string = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].String.serialize(value));
    pure.address = (value)=>makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address.serialize(value));
    pure.id = pure.address;
    pure.vector = (type, value)=>{
        return makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(schemaFromName(type)).serialize(value));
    };
    pure.option = (type, value)=>{
        return makePure(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].option(schemaFromName(type)).serialize(value));
    };
    return pure;
}
function schemaFromName(name) {
    switch(name){
        case "u8":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u8();
        case "u16":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u16();
        case "u32":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u32();
        case "u64":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u64();
        case "u128":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u128();
        case "u256":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].u256();
        case "bool":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].bool();
        case "string":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].string();
        case "id":
        case "address":
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].Address;
    }
    const generic = name.match(/^(vector|option)<(.+)>$/);
    if (generic) {
        const [kind, inner] = generic.slice(1);
        if (kind === "vector") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].vector(schemaFromName(inner));
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].option(schemaFromName(inner));
        }
    }
    throw new Error(`Invalid Pure type name: ${name}`);
}
;
 //# sourceMappingURL=pure.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/hash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashTypedData",
    ()=>hashTypedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$blake2b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@noble/hashes/esm/blake2b.js [app-client] (ecmascript)");
;
function hashTypedData(typeTag, data) {
    const typeTagBytes = Array.from(`${typeTag}::`).map((e)=>e.charCodeAt(0));
    const dataWithTag = new Uint8Array(typeTagBytes.length + data.length);
    dataWithTag.set(typeTagBytes);
    dataWithTag.set(data, typeTagBytes.length);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$blake2b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blake2b"])(dataWithTag, {
        dkLen: 32
    });
}
;
 //# sourceMappingURL=hash.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/TransactionData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionDataBuilder",
    ()=>TransactionDataBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/bcs/dist/esm/b58.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/bcs/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/hash.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function prepareIotaAddress(address) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(address).replace("0x", "");
}
class TransactionDataBuilder {
    constructor(clone){
        this.version = 2;
        this.sender = clone?.sender ?? null;
        this.expiration = clone?.expiration ?? null;
        this.inputs = clone?.inputs ?? [];
        this.commands = clone?.commands ?? [];
        this.gasData = clone?.gasData ?? {
            budget: null,
            price: null,
            owner: null,
            payment: null
        };
    }
    static fromKindBytes(bytes) {
        const kind = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionKind.parse(bytes);
        const programmableTx = kind.ProgrammableTransaction;
        if (!programmableTx) {
            throw new Error("Unable to deserialize from bytes.");
        }
        return TransactionDataBuilder.restore({
            version: 2,
            sender: null,
            expiration: null,
            gasData: {
                budget: null,
                owner: null,
                payment: null,
                price: null
            },
            inputs: programmableTx.inputs,
            commands: programmableTx.commands
        });
    }
    static fromBytes(bytes) {
        const rawData = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionData.parse(bytes);
        const data = rawData?.V1;
        const programmableTx = data.kind.ProgrammableTransaction;
        if (!data || !programmableTx) {
            throw new Error("Unable to deserialize from bytes.");
        }
        return TransactionDataBuilder.restore({
            version: 2,
            sender: data.sender,
            expiration: data.expiration,
            gasData: data.gasData,
            inputs: programmableTx.inputs,
            commands: programmableTx.commands
        });
    }
    static restore(data) {
        if (data.version === 2) {
            return new TransactionDataBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], data));
        } else {
            return new TransactionDataBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDataFromV1"])(data)));
        }
    }
    /**
   * Generate transaction digest.
   *
   * @param bytes BCS serialized transaction data
   * @returns transaction digest.
   */ static getDigestFromBytes(bytes) {
        const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashTypedData"])("TransactionData", bytes);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase58"])(hash);
    }
    // @deprecated use gasData instead
    get gasConfig() {
        return this.gasData;
    }
    // @deprecated use gasData instead
    set gasConfig(value) {
        this.gasData = value;
    }
    build({ maxSizeBytes = Infinity, overrides, onlyTransactionKind } = {}) {
        const inputs = this.inputs;
        const commands = this.commands;
        const kind = {
            ProgrammableTransaction: {
                inputs,
                commands
            }
        };
        if (onlyTransactionKind) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionKind.serialize(kind, {
                maxSize: maxSizeBytes
            }).toBytes();
        }
        const expiration = overrides?.expiration ?? this.expiration;
        const sender = overrides?.sender ?? this.sender;
        const gasData = {
            ...this.gasData,
            ...overrides?.gasConfig,
            ...overrides?.gasData
        };
        if (!sender) {
            throw new Error("Missing transaction sender");
        }
        if (!gasData.budget) {
            throw new Error("Missing gas budget");
        }
        if (!gasData.payment) {
            throw new Error("Missing gas payment");
        }
        if (!gasData.price) {
            throw new Error("Missing gas price");
        }
        const transactionData = {
            sender: prepareIotaAddress(sender),
            expiration: expiration ? expiration : {
                None: true
            },
            gasData: {
                payment: gasData.payment,
                owner: prepareIotaAddress(this.gasData.owner ?? sender),
                price: BigInt(gasData.price),
                budget: BigInt(gasData.budget)
            },
            kind: {
                ProgrammableTransaction: {
                    inputs,
                    commands
                }
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$bcs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bcs"].TransactionData.serialize({
            V1: transactionData
        }, {
            maxSize: maxSizeBytes
        }).toBytes();
    }
    addInput(type, arg) {
        const index = this.inputs.length;
        this.inputs.push(arg);
        return {
            Input: index,
            type,
            $kind: "Input"
        };
    }
    getInputUses(index, fn) {
        this.mapArguments((arg, command)=>{
            if (arg.$kind === "Input" && arg.Input === index) {
                fn(arg, command);
            }
            return arg;
        });
    }
    mapArguments(fn) {
        for (const command of this.commands){
            switch(command.$kind){
                case "MoveCall":
                    command.MoveCall.arguments = command.MoveCall.arguments.map((arg)=>fn(arg, command));
                    break;
                case "TransferObjects":
                    command.TransferObjects.objects = command.TransferObjects.objects.map((arg)=>fn(arg, command));
                    command.TransferObjects.address = fn(command.TransferObjects.address, command);
                    break;
                case "SplitCoins":
                    command.SplitCoins.coin = fn(command.SplitCoins.coin, command);
                    command.SplitCoins.amounts = command.SplitCoins.amounts.map((arg)=>fn(arg, command));
                    break;
                case "MergeCoins":
                    command.MergeCoins.destination = fn(command.MergeCoins.destination, command);
                    command.MergeCoins.sources = command.MergeCoins.sources.map((arg)=>fn(arg, command));
                    break;
                case "MakeMoveVec":
                    command.MakeMoveVec.elements = command.MakeMoveVec.elements.map((arg)=>fn(arg, command));
                    break;
                case "Upgrade":
                    command.Upgrade.ticket = fn(command.Upgrade.ticket, command);
                    break;
                case "$Intent":
                    const inputs = command.$Intent.inputs;
                    command.$Intent.inputs = {};
                    for (const [key, value] of Object.entries(inputs)){
                        command.$Intent.inputs[key] = Array.isArray(value) ? value.map((arg)=>fn(arg, command)) : fn(value, command);
                    }
                    break;
                case "Publish":
                    break;
                default:
                    throw new Error(`Unexpected transaction kind: ${command.$kind}`);
            }
        }
    }
    replaceCommand(index, replacement) {
        if (!Array.isArray(replacement)) {
            this.commands[index] = replacement;
            return;
        }
        const sizeDiff = replacement.length - 1;
        this.commands.splice(index, 1, ...replacement);
        if (sizeDiff !== 0) {
            this.mapArguments((arg)=>{
                switch(arg.$kind){
                    case "Result":
                        if (arg.Result > index) {
                            arg.Result += sizeDiff;
                        }
                        break;
                    case "NestedResult":
                        if (arg.NestedResult[0] > index) {
                            arg.NestedResult[0] += sizeDiff;
                        }
                        break;
                }
                return arg;
            });
        }
    }
    getDigest() {
        const bytes = this.build({
            onlyTransactionKind: false
        });
        return TransactionDataBuilder.getDigestFromBytes(bytes);
    }
    snapshot() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionData"], this);
    }
}
;
 //# sourceMappingURL=TransactionData.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractMutableReference",
    ()=>extractMutableReference,
    "extractReference",
    ()=>extractReference,
    "extractStructTag",
    ()=>extractStructTag,
    "getIdFromCallArg",
    ()=>getIdFromCallArg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
;
function extractMutableReference(normalizedType) {
    return typeof normalizedType === "object" && "MutableReference" in normalizedType ? normalizedType.MutableReference : void 0;
}
function extractReference(normalizedType) {
    return typeof normalizedType === "object" && "Reference" in normalizedType ? normalizedType.Reference : void 0;
}
function extractStructTag(normalizedType) {
    if (typeof normalizedType === "object" && "Struct" in normalizedType) {
        return normalizedType;
    }
    const ref = extractReference(normalizedType);
    const mutRef = extractMutableReference(normalizedType);
    if (typeof ref === "object" && "Struct" in ref) {
        return ref;
    }
    if (typeof mutRef === "object" && "Struct" in mutRef) {
        return mutRef;
    }
    return void 0;
}
function getIdFromCallArg(arg) {
    if (typeof arg === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg);
    }
    if (arg.Object) {
        if (arg.Object.ImmOrOwnedObject) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.Object.ImmOrOwnedObject.objectId);
        }
        if (arg.Object.Receiving) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.Object.Receiving.objectId);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.Object.SharedObject.objectId);
    }
    if (arg.UnresolvedObject) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(arg.UnresolvedObject.objectId);
    }
    return void 0;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transaction",
    ()=>Transaction,
    "isTransaction",
    ()=>isTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/bcs/dist/esm/b64.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/bcs/dist/esm/bcs-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/utils/iota-types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/internal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/data/v2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/Inputs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$json$2d$rpc$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/json-rpc-resolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$pure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/pure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/TransactionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@iota/iota-sdk/dist/esm/transactions/utils.js [app-client] (ecmascript)");
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
var _serializationPlugins, _buildPlugins, _intentResolvers, _data, _Transaction_instances, normalizeTransactionArgument_fn, resolveArgument_fn, prepareBuild_fn, runPlugins_fn;
;
;
;
;
;
;
;
;
;
;
;
;
;
function createTransactionResult(index) {
    const baseResult = {
        $kind: "Result",
        Result: index
    };
    const nestedResults = [];
    const nestedResultFor = (resultIndex)=>nestedResults[resultIndex] ?? (nestedResults[resultIndex] = {
            $kind: "NestedResult",
            NestedResult: [
                index,
                resultIndex
            ]
        });
    return new Proxy(baseResult, {
        set () {
            throw new Error("The transaction result is a proxy, and does not support setting properties directly");
        },
        // TODO: Instead of making this return a concrete argument, we should ideally
        // make it reference-based (so that this gets resolved at build-time), which
        // allows re-ordering transactions.
        get (target, property) {
            if (property in target) {
                return Reflect.get(target, property);
            }
            if (property === Symbol.iterator) {
                return function*() {
                    let i = 0;
                    while(true){
                        yield nestedResultFor(i);
                        i++;
                    }
                };
            }
            if (typeof property === "symbol") return;
            const resultIndex = parseInt(property, 10);
            if (Number.isNaN(resultIndex) || resultIndex < 0) return;
            return nestedResultFor(resultIndex);
        }
    });
}
const TRANSACTION_BRAND = Symbol.for("@iota/transaction");
function isTransaction(obj) {
    return !!obj && typeof obj === "object" && obj[TRANSACTION_BRAND] === true;
}
const modulePluginRegistry = {
    buildPlugins: /* @__PURE__ */ new Map(),
    serializationPlugins: /* @__PURE__ */ new Map()
};
const TRANSACTION_REGISTRY_KEY = Symbol.for("@iota/transaction/registry");
function getGlobalPluginRegistry() {
    try {
        const target = globalThis;
        if (!target[TRANSACTION_REGISTRY_KEY]) {
            target[TRANSACTION_REGISTRY_KEY] = modulePluginRegistry;
        }
        return target[TRANSACTION_REGISTRY_KEY];
    } catch (e) {
        return modulePluginRegistry;
    }
}
const _Transaction = class _Transaction {
    constructor(){
        __privateAdd(this, _Transaction_instances);
        __privateAdd(this, _serializationPlugins);
        __privateAdd(this, _buildPlugins);
        __privateAdd(this, _intentResolvers, /* @__PURE__ */ new Map());
        __privateAdd(this, _data);
        /**
     * Add a new object input to the transaction.
     */ this.object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObjectMethods"])((value)=>{
            if (typeof value === "function") {
                return this.object(value(this));
            }
            if (typeof value === "object" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], value)) {
                return value;
            }
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIdFromCallArg"])(value);
            const inserted = __privateGet(this, _data).inputs.find((i)=>id === (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIdFromCallArg"])(i));
            if (inserted?.Object?.SharedObject && typeof value === "object" && value.Object?.SharedObject) {
                inserted.Object.SharedObject.mutable = inserted.Object.SharedObject.mutable || value.Object.SharedObject.mutable;
            }
            return inserted ? {
                $kind: "Input",
                Input: __privateGet(this, _data).inputs.indexOf(inserted),
                type: "object"
            } : __privateGet(this, _data).addInput("object", typeof value === "string" ? {
                $kind: "UnresolvedObject",
                UnresolvedObject: {
                    objectId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$utils$2f$iota$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeIotaAddress"])(value)
                }
            } : value);
        });
        const globalPlugins = getGlobalPluginRegistry();
        __privateSet(this, _data, new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"]());
        __privateSet(this, _buildPlugins, [
            ...globalPlugins.buildPlugins.values()
        ]);
        __privateSet(this, _serializationPlugins, [
            ...globalPlugins.serializationPlugins.values()
        ]);
    }
    /**
   * Converts from a serialize transaction kind (built with `build({ onlyTransactionKind: true })`) to a `Transaction` class.
   * Supports either a byte array, or base64-encoded bytes.
   */ static fromKind(serialized) {
        const tx = new _Transaction();
        __privateSet(tx, _data, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"].fromKindBytes(typeof serialized === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(serialized) : serialized));
        return tx;
    }
    /**
   * Converts from a serialized transaction format to a `Transaction` class.
   * There are two supported serialized formats:
   * - A string returned from `Transaction#serialize`. The serialized format must be compatible, or it will throw an error.
   * - A byte array (or base64-encoded bytes) containing BCS transaction data.
   */ static from(transaction) {
        const newTransaction = new _Transaction();
        if (isTransaction(transaction)) {
            __privateSet(newTransaction, _data, new __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"](transaction.getData()));
        } else if (typeof transaction !== "string" || !transaction.startsWith("{")) {
            __privateSet(newTransaction, _data, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"].fromBytes(typeof transaction === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$b64$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase64"])(transaction) : transaction));
        } else {
            __privateSet(newTransaction, _data, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$TransactionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionDataBuilder"].restore(JSON.parse(transaction)));
        }
        return newTransaction;
    }
    static registerGlobalSerializationPlugin(stepOrStep, step) {
        getGlobalPluginRegistry().serializationPlugins.set(stepOrStep, step ?? stepOrStep);
    }
    static unregisterGlobalSerializationPlugin(name) {
        getGlobalPluginRegistry().serializationPlugins.delete(name);
    }
    static registerGlobalBuildPlugin(stepOrStep, step) {
        getGlobalPluginRegistry().buildPlugins.set(stepOrStep, step ?? stepOrStep);
    }
    static unregisterGlobalBuildPlugin(name) {
        getGlobalPluginRegistry().buildPlugins.delete(name);
    }
    addSerializationPlugin(step) {
        __privateGet(this, _serializationPlugins).push(step);
    }
    addBuildPlugin(step) {
        __privateGet(this, _buildPlugins).push(step);
    }
    addIntentResolver(intent, resolver) {
        if (__privateGet(this, _intentResolvers).has(intent) && __privateGet(this, _intentResolvers).get(intent) !== resolver) {
            throw new Error(`Intent resolver for ${intent} already exists`);
        }
        __privateGet(this, _intentResolvers).set(intent, resolver);
    }
    setSender(sender) {
        __privateGet(this, _data).sender = sender;
    }
    /**
   * Sets the sender only if it has not already been set.
   * This is useful for sponsored transaction flows where the sender may not be the same as the signer address.
   */ setSenderIfNotSet(sender) {
        if (!__privateGet(this, _data).sender) {
            __privateGet(this, _data).sender = sender;
        }
    }
    setExpiration(expiration) {
        __privateGet(this, _data).expiration = expiration ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionExpiration"], expiration) : null;
    }
    setGasPrice(price) {
        __privateGet(this, _data).gasConfig.price = String(price);
    }
    setGasBudget(budget) {
        __privateGet(this, _data).gasConfig.budget = String(budget);
    }
    setGasBudgetIfNotSet(budget) {
        if (__privateGet(this, _data).gasData.budget == null) {
            __privateGet(this, _data).gasConfig.budget = String(budget);
        }
    }
    setGasOwner(owner) {
        __privateGet(this, _data).gasConfig.owner = owner;
    }
    setGasPayment(payments) {
        __privateGet(this, _data).gasConfig.payment = payments.map((payment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRef"], payment));
    }
    /** @deprecated Use `getData()` instead. */ get blockData() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeV1TransactionData"])(__privateGet(this, _data).snapshot());
    }
    /** Get a snapshot of the transaction data, in JSON form: */ getData() {
        return __privateGet(this, _data).snapshot();
    }
    // Used to brand transaction classes so that they can be identified, even between multiple copies
    // of the builder.
    get [TRANSACTION_BRAND]() {
        return true;
    }
    // Temporary workaround for the wallet interface accidentally serializing transactions via postMessage
    get pure() {
        Object.defineProperty(this, "pure", {
            enumerable: false,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$pure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPure"])((value)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializedBcs"])(value)) {
                    return __privateGet(this, _data).addInput("pure", {
                        $kind: "Pure",
                        Pure: {
                            bytes: value.toBase64()
                        }
                    });
                }
                return __privateGet(this, _data).addInput("pure", (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedCallArg"], value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizedCallArg"], value) : value instanceof Uint8Array ? __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].Pure(value) : {
                    $kind: "UnresolvedPure",
                    UnresolvedPure: {
                        value
                    }
                });
            })
        });
        return this.pure;
    }
    /** Returns an argument for the gas coin, to be used in a transaction. */ get gas() {
        return {
            $kind: "GasCoin",
            GasCoin: true
        };
    }
    /**
   * Add a new object input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */ objectRef(...args) {
        return this.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ObjectRef(...args));
    }
    /**
   * Add a new receiving input to the transaction using the fully-resolved object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */ receivingRef(...args) {
        return this.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].ReceivingRef(...args));
    }
    /**
   * Add a new shared object input to the transaction using the fully-resolved shared object reference.
   * If you only have an object ID, use `builder.object(id)` instead.
   */ sharedObjectRef(...args) {
        return this.object(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Inputs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inputs"].SharedObjectRef(...args));
    }
    /** Add a transaction to the transaction */ add(command) {
        if (typeof command === "function") {
            return command(this);
        }
        const index = __privateGet(this, _data).commands.push(command);
        return createTransactionResult(index - 1);
    }
    // Method shorthands:
    splitCoins(coin, amounts) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].SplitCoins(typeof coin === "string" ? this.object(coin) : __privateMethod(this, _Transaction_instances, resolveArgument_fn).call(this, coin), amounts.map((amount)=>typeof amount === "number" || typeof amount === "bigint" || typeof amount === "string" ? this.pure.u64(amount) : __privateMethod(this, _Transaction_instances, normalizeTransactionArgument_fn).call(this, amount))));
    }
    mergeCoins(destination, sources) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].MergeCoins(this.object(destination), sources.map((src)=>this.object(src))));
    }
    publish({ modules, dependencies }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].Publish({
            modules,
            dependencies
        }));
    }
    upgrade({ modules, dependencies, package: packageId, ticket }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].Upgrade({
            modules,
            dependencies,
            package: packageId,
            ticket: this.object(ticket)
        }));
    }
    moveCall({ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arguments: args, ...input }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].MoveCall({
            ...input,
            arguments: args?.map((arg)=>__privateMethod(this, _Transaction_instances, normalizeTransactionArgument_fn).call(this, arg))
        }));
    }
    transferObjects(objects, address) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].TransferObjects(objects.map((obj)=>this.object(obj)), typeof address === "string" ? this.pure.address(address) : __privateMethod(this, _Transaction_instances, normalizeTransactionArgument_fn).call(this, address)));
    }
    makeMoveVec({ type, elements }) {
        return this.add(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Commands"].MakeMoveVec({
            type,
            elements: elements.map((obj)=>this.object(obj))
        }));
    }
    /**
   * @deprecated Use toJSON instead.
   * For synchronous serialization, you can use `getData()`
   * */ serialize() {
        return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeV1TransactionData"])(__privateGet(this, _data).snapshot()));
    }
    async toJSON(options = {}) {
        await this.prepareForSerialization(options);
        return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$v2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializedTransactionDataV2"], __privateGet(this, _data).snapshot()), (_key, value)=>typeof value === "bigint" ? value.toString() : value, 2);
    }
    /** Build the transaction to BCS bytes, and sign it with the provided keypair. */ async sign(options) {
        const { signer, ...buildOptions } = options;
        const bytes = await this.build(buildOptions);
        return signer.signTransaction(bytes);
    }
    /** Build the transaction to BCS bytes. */ async build(options = {}) {
        await this.prepareForSerialization(options);
        await __privateMethod(this, _Transaction_instances, prepareBuild_fn).call(this, options);
        return __privateGet(this, _data).build({
            maxSizeBytes: options.maxSizeBytes,
            onlyTransactionKind: options.onlyTransactionKind
        });
    }
    /** Derive transaction digest */ async getDigest(options = {}) {
        await __privateMethod(this, _Transaction_instances, prepareBuild_fn).call(this, options);
        return __privateGet(this, _data).getDigest();
    }
    async prepareForSerialization(options) {
        const intents = /* @__PURE__ */ new Set();
        for (const command of __privateGet(this, _data).commands){
            if (command.$Intent) {
                intents.add(command.$Intent.name);
            }
        }
        const steps = [
            ...__privateGet(this, _serializationPlugins)
        ];
        for (const intent of intents){
            if (options.supportedIntents?.includes(intent)) {
                continue;
            }
            if (!__privateGet(this, _intentResolvers).has(intent)) {
                throw new Error(`Missing intent resolver for ${intent}`);
            }
            steps.push(__privateGet(this, _intentResolvers).get(intent));
        }
        await __privateMethod(this, _Transaction_instances, runPlugins_fn).call(this, steps, options);
    }
};
_serializationPlugins = new WeakMap();
_buildPlugins = new WeakMap();
_intentResolvers = new WeakMap();
_data = new WeakMap();
_Transaction_instances = new WeakSet();
normalizeTransactionArgument_fn = function(arg) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$bcs$2f$dist$2f$esm$2f$bcs$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializedBcs"])(arg)) {
        return this.pure(arg);
    }
    return __privateMethod(this, _Transaction_instances, resolveArgument_fn).call(this, arg);
};
resolveArgument_fn = function(arg) {
    if (typeof arg === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], arg(this));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$data$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Argument"], arg);
};
prepareBuild_fn = async function(options) {
    if (!options.onlyTransactionKind && !__privateGet(this, _data).sender) {
        throw new Error("Missing transaction sender");
    }
    await __privateMethod(this, _Transaction_instances, runPlugins_fn).call(this, [
        ...__privateGet(this, _buildPlugins),
        __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$json$2d$rpc$2d$resolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTransactionData"]
    ], options);
};
runPlugins_fn = async function(plugins, options) {
    const createNext = (i)=>{
        if (i >= plugins.length) {
            return ()=>{};
        }
        const plugin = plugins[i];
        return async ()=>{
            const next = createNext(i + 1);
            let calledNext = false;
            let nextResolved = false;
            await plugin(__privateGet(this, _data), options, async ()=>{
                if (calledNext) {
                    throw new Error(`next() was call multiple times in TransactionPlugin ${i}`);
                }
                calledNext = true;
                await next();
                nextResolved = true;
            });
            if (!calledNext) {
                throw new Error(`next() was not called in TransactionPlugin ${i}`);
            }
            if (!nextResolved) {
                throw new Error(`next() was not awaited in TransactionPlugin ${i}`);
            }
        };
    };
    await createNext(0)();
};
let Transaction = _Transaction;
;
 //# sourceMappingURL=Transaction.js.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Concatenates two arrays faster than the array spread operator.
 */ __turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
const concatArrays = (array1, array2)=>{
    // Pre-allocate for better V8 optimization
    const combinedArray = new Array(array1.length + array2.length);
    for(let i = 0; i < array1.length; i++){
        combinedArray[i] = array1[i];
    }
    for(let i = 0; i < array2.length; i++){
        combinedArray[array1.length + i] = array2[i];
    }
    return combinedArray;
};
// Factory function ensures consistent object shapes
const createClassValidatorObject = (classGroupId, validator)=>({
        classGroupId,
        validator
    });
// Factory ensures consistent ClassPartObject shape
const createClassPartObject = (nextPart = new Map(), validators = null, classGroupId)=>({
        nextPart,
        validators,
        classGroupId
    });
const CLASS_PART_SEPARATOR = '-';
const EMPTY_CONFLICTS = [];
// I use two dots here because one dot is used as prefix for class groups in plugins
const ARBITRARY_PROPERTY_PREFIX = 'arbitrary..';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        if (className.startsWith('[') && className.endsWith(']')) {
            return getGroupIdForArbitraryProperty(className);
        }
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and skip it.
        const startIndex = classParts[0] === '' && classParts.length > 1 ? 1 : 0;
        return getGroupRecursive(classParts, startIndex, classMap);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        if (hasPostfixModifier) {
            const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
            const baseConflicts = conflictingClassGroups[classGroupId];
            if (modifierConflicts) {
                if (baseConflicts) {
                    // Merge base conflicts with modifier conflicts
                    return concatArrays(baseConflicts, modifierConflicts);
                }
                // Only modifier conflicts
                return modifierConflicts;
            }
            // Fall back to without postfix if no modifier conflicts
            return baseConflicts || EMPTY_CONFLICTS;
        }
        return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, startIndex, classPartObject)=>{
    const classPathsLength = classParts.length - startIndex;
    if (classPathsLength === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[startIndex];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    if (nextClassPartObject) {
        const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
        if (result) return result;
    }
    const validators = classPartObject.validators;
    if (validators === null) {
        return undefined;
    }
    // Build classRest string efficiently by joining from startIndex onwards
    const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
    const validatorsLength = validators.length;
    for(let i = 0; i < validatorsLength; i++){
        const validatorObj = validators[i];
        if (validatorObj.validator(classRest)) {
            return validatorObj.classGroupId;
        }
    }
    return undefined;
};
/**
 * Get the class group ID for an arbitrary property.
 *
 * @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
 */ const getGroupIdForArbitraryProperty = (className)=>className.slice(1, -1).indexOf(':') === -1 ? undefined : (()=>{
        const content = className.slice(1, -1);
        const colonIndex = content.indexOf(':');
        const property = content.slice(0, colonIndex);
        return property ? ARBITRARY_PROPERTY_PREFIX + property : undefined;
    })();
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, classGroups } = config;
    return processClassGroups(classGroups, theme);
};
// Split into separate functions to maintain monomorphic call sites
const processClassGroups = (classGroups, theme)=>{
    const classMap = createClassPartObject();
    for(const classGroupId in classGroups){
        const group = classGroups[classGroupId];
        processClassesRecursively(group, classMap, classGroupId, theme);
    }
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    const len = classGroup.length;
    for(let i = 0; i < len; i++){
        const classDefinition = classGroup[i];
        processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
    }
};
// Split into separate functions for each type to maintain monomorphic call sites
const processClassDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (typeof classDefinition === 'string') {
        processStringDefinition(classDefinition, classPartObject, classGroupId);
        return;
    }
    if (typeof classDefinition === 'function') {
        processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
        return;
    }
    processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
const processStringDefinition = (classDefinition, classPartObject, classGroupId)=>{
    const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
    classPartObjectToEdit.classGroupId = classGroupId;
};
const processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
    }
    if (classPartObject.validators === null) {
        classPartObject.validators = [];
    }
    classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
const processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    const entries = Object.entries(classDefinition);
    const len = entries.length;
    for(let i = 0; i < len; i++){
        const [key, value] = entries[i];
        processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
    }
};
const getPart = (classPartObject, path)=>{
    let current = classPartObject;
    const parts = path.split(CLASS_PART_SEPARATOR);
    const len = parts.length;
    for(let i = 0; i < len; i++){
        const part = parts[i];
        let next = current.nextPart.get(part);
        if (!next) {
            next = createClassPartObject();
            current.nextPart.set(part, next);
        }
        current = next;
    }
    return current;
};
// Type guard maintains monomorphic check
const isThemeGetter = (func)=>'isThemeGetter' in func && func.isThemeGetter === true;
// LRU cache implementation using plain objects for simplicity
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = Object.create(null);
    let previousCache = Object.create(null);
    const update = (key, value)=>{
        cache[key] = value;
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = Object.create(null);
        }
    };
    return {
        get (key) {
            let value = cache[key];
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache[key]) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (key in cache) {
                cache[key] = value;
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const MODIFIER_SEPARATOR = ':';
const EMPTY_MODIFIERS = [];
// Pre-allocated result object shape for consistency
const createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal)=>({
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition,
        isExternal
    });
const createParseClassName = (config)=>{
    const { prefix, experimentalParseClassName } = config;
    /**
   * Parse class name into parts.
   *
   * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
   * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
   */ let parseClassName = (className)=>{
        // Use simple array with push for better performance
        const modifiers = [];
        let bracketDepth = 0;
        let parenDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        const len = className.length;
        for(let index = 0; index < len; index++){
            const currentCharacter = className[index];
            if (bracketDepth === 0 && parenDepth === 0) {
                if (currentCharacter === MODIFIER_SEPARATOR) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + 1;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') bracketDepth++;
            else if (currentCharacter === ']') bracketDepth--;
            else if (currentCharacter === '(') parenDepth++;
            else if (currentCharacter === ')') parenDepth--;
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
        // Inline important modifier check
        let baseClassName = baseClassNameWithImportantModifier;
        let hasImportantModifier = false;
        if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
            hasImportantModifier = true;
        } else if (/**
     * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
     * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
     */ baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(1);
            hasImportantModifier = true;
        }
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
    };
    if (prefix) {
        const fullPrefix = prefix + MODIFIER_SEPARATOR;
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, undefined, true);
    }
    if (experimentalParseClassName) {
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>experimentalParseClassName({
                className,
                parseClassName: parseClassNameOriginal
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const createSortModifiers = (config)=>{
    // Pre-compute weights for all known modifiers for O(1) comparison
    const modifierWeights = new Map();
    // Assign weights to sensitive modifiers (highest priority, but preserve order)
    config.orderSensitiveModifiers.forEach((mod, index)=>{
        modifierWeights.set(mod, 1000000 + index); // High weights for sensitive mods
    });
    return (modifiers)=>{
        const result = [];
        let currentSegment = [];
        // Process modifiers in one pass
        for(let i = 0; i < modifiers.length; i++){
            const modifier = modifiers[i];
            // Check if modifier is sensitive (starts with '[' or in orderSensitiveModifiers)
            const isArbitrary = modifier[0] === '[';
            const isOrderSensitive = modifierWeights.has(modifier);
            if (isArbitrary || isOrderSensitive) {
                // Sort and flush current segment alphabetically
                if (currentSegment.length > 0) {
                    currentSegment.sort();
                    result.push(...currentSegment);
                    currentSegment = [];
                }
                result.push(modifier);
            } else {
                // Regular modifier - add to current segment for batch sorting
                currentSegment.push(modifier);
            }
        }
        // Sort and add any remaining segment items
        if (currentSegment.length > 0) {
            currentSegment.sort();
            result.push(...currentSegment);
        }
        return result;
    };
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        sortModifiers: createSortModifiers(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        if (isExternal) {
            result = originalClassName + (result.length > 0 ? ' ' + result : result);
            continue;
        }
        let hasPostfixModifier = !!maybePostfixModifierPosition;
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        // Fast path: skip sorting for empty or single modifier
        const variantModifier = modifiers.length === 0 ? '' : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.indexOf(classId) > -1) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ const twJoin = (...classLists)=>{
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < classLists.length){
        if (argument = classLists[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
const toValue = (mix)=>{
    // Fast path for strings
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
const createTailwindMerge = (createConfigFirst, ...createConfigRest)=>{
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall;
    const initTailwindMerge = (classList)=>{
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    };
    const tailwindMerge = (classList)=>{
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    };
    functionToCall = initTailwindMerge;
    return (...args)=>functionToCall(twJoin(...args));
};
const fallbackThemeArr = [];
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || fallbackThemeArr;
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+\/\d+$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value)=>fractionRegex.test(value);
const isNumber = (value)=>!!value && !Number.isNaN(Number(value));
const isInteger = (value)=>!!value && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const isAny = ()=>true;
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const isAnyNonArbitrary = (value)=>!isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = (value)=>arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value)=>getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value)=>getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value)=>getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value)=>getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value)=>getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value)=>getIsArbitraryVariable(value, isLabelShadow, true);
// Helpers
const getIsArbitraryValue = (value, testLabel, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false)=>{
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return shouldMatchNoLabel;
    }
    return false;
};
// Labels
const isLabelPosition = (label)=>label === 'position' || label === 'percentage';
const isLabelImage = (label)=>label === 'image' || label === 'url';
const isLabelSize = (label)=>label === 'length' || label === 'size' || label === 'bg-size';
const isLabelLength = (label)=>label === 'length';
const isLabelNumber = (label)=>label === 'number';
const isLabelFamilyName = (label)=>label === 'family-name';
const isLabelShadow = (label)=>label === 'shadow';
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isAnyNonArbitrary,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isArbitraryVariable,
    isArbitraryVariableFamilyName,
    isArbitraryVariableImage,
    isArbitraryVariableLength,
    isArbitraryVariablePosition,
    isArbitraryVariableShadow,
    isArbitraryVariableSize,
    isFraction,
    isInteger,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    /**
   * Theme getters for theme variable namespaces
   * @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
   */ /***/ const themeColor = fromTheme('color');
    const themeFont = fromTheme('font');
    const themeText = fromTheme('text');
    const themeFontWeight = fromTheme('font-weight');
    const themeTracking = fromTheme('tracking');
    const themeLeading = fromTheme('leading');
    const themeBreakpoint = fromTheme('breakpoint');
    const themeContainer = fromTheme('container');
    const themeSpacing = fromTheme('spacing');
    const themeRadius = fromTheme('radius');
    const themeShadow = fromTheme('shadow');
    const themeInsetShadow = fromTheme('inset-shadow');
    const themeTextShadow = fromTheme('text-shadow');
    const themeDropShadow = fromTheme('drop-shadow');
    const themeBlur = fromTheme('blur');
    const themePerspective = fromTheme('perspective');
    const themeAspect = fromTheme('aspect');
    const themeEase = fromTheme('ease');
    const themeAnimate = fromTheme('animate');
    /**
   * Helpers to avoid repeating the same scales
   *
   * We use functions that create a new array every time they're called instead of static arrays.
   * This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
   */ /***/ const scaleBreak = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const scalePosition = ()=>[
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'top-left',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'left-top',
            'top-right',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'right-top',
            'bottom-right',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'right-bottom',
            'bottom-left',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'left-bottom'
        ];
    const scalePositionWithArbitrary = ()=>[
            ...scalePosition(),
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const scaleOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const scaleUnambiguousSpacing = ()=>[
            isArbitraryVariable,
            isArbitraryValue,
            themeSpacing
        ];
    const scaleInset = ()=>[
            isFraction,
            'full',
            'auto',
            ...scaleUnambiguousSpacing()
        ];
    const scaleGridTemplateColsRows = ()=>[
            isInteger,
            'none',
            'subgrid',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartAndEnd = ()=>[
            'auto',
            {
                span: [
                    'full',
                    isInteger,
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            },
            isInteger,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartOrEnd = ()=>[
            isInteger,
            'auto',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridAutoColsRows = ()=>[
            'auto',
            'min',
            'max',
            'fr',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleAlignPrimaryAxis = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch',
            'baseline',
            'center-safe',
            'end-safe'
        ];
    const scaleAlignSecondaryAxis = ()=>[
            'start',
            'end',
            'center',
            'stretch',
            'center-safe',
            'end-safe'
        ];
    const scaleMargin = ()=>[
            'auto',
            ...scaleUnambiguousSpacing()
        ];
    const scaleSizing = ()=>[
            isFraction,
            'auto',
            'full',
            'dvw',
            'dvh',
            'lvw',
            'lvh',
            'svw',
            'svh',
            'min',
            'max',
            'fit',
            ...scaleUnambiguousSpacing()
        ];
    const scaleColor = ()=>[
            themeColor,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBgPosition = ()=>[
            ...scalePosition(),
            isArbitraryVariablePosition,
            isArbitraryPosition,
            {
                position: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleBgRepeat = ()=>[
            'no-repeat',
            {
                repeat: [
                    '',
                    'x',
                    'y',
                    'space',
                    'round'
                ]
            }
        ];
    const scaleBgSize = ()=>[
            'auto',
            'cover',
            'contain',
            isArbitraryVariableSize,
            isArbitrarySize,
            {
                size: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleGradientStopPosition = ()=>[
            isPercent,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleRadius = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            '',
            'none',
            'full',
            themeRadius,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBorderWidth = ()=>[
            '',
            isNumber,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleLineStyle = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double'
        ];
    const scaleBlendMode = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const scaleMaskImagePosition = ()=>[
            isNumber,
            isPercent,
            isArbitraryVariablePosition,
            isArbitraryPosition
        ];
    const scaleBlur = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            '',
            'none',
            themeBlur,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleRotate = ()=>[
            'none',
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleScale = ()=>[
            'none',
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleSkew = ()=>[
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleTranslate = ()=>[
            isFraction,
            'full',
            ...scaleUnambiguousSpacing()
        ];
    return {
        cacheSize: 500,
        theme: {
            animate: [
                'spin',
                'ping',
                'pulse',
                'bounce'
            ],
            aspect: [
                'video'
            ],
            blur: [
                isTshirtSize
            ],
            breakpoint: [
                isTshirtSize
            ],
            color: [
                isAny
            ],
            container: [
                isTshirtSize
            ],
            'drop-shadow': [
                isTshirtSize
            ],
            ease: [
                'in',
                'out',
                'in-out'
            ],
            font: [
                isAnyNonArbitrary
            ],
            'font-weight': [
                'thin',
                'extralight',
                'light',
                'normal',
                'medium',
                'semibold',
                'bold',
                'extrabold',
                'black'
            ],
            'inset-shadow': [
                isTshirtSize
            ],
            leading: [
                'none',
                'tight',
                'snug',
                'normal',
                'relaxed',
                'loose'
            ],
            perspective: [
                'dramatic',
                'near',
                'normal',
                'midrange',
                'distant',
                'none'
            ],
            radius: [
                isTshirtSize
            ],
            shadow: [
                isTshirtSize
            ],
            spacing: [
                'px',
                isNumber
            ],
            text: [
                isTshirtSize
            ],
            'text-shadow': [
                isTshirtSize
            ],
            tracking: [
                'tighter',
                'tight',
                'normal',
                'wide',
                'wider',
                'widest'
            ]
        },
        classGroups: {
            // --------------
            // --- Layout ---
            // --------------
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        isFraction,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeAspect
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isNumber,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeContainer
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': scaleBreak()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': scaleBreak()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: scalePositionWithArbitrary()
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: scaleOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': scaleOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': scaleOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': scaleOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: scaleInset()
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': scaleInset()
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': scaleInset()
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: scaleInset()
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: scaleInset()
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: scaleInset()
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: scaleInset()
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: scaleInset()
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: scaleInset()
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        isInteger,
                        'auto',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------------
            // --- Flexbox and Grid ---
            // ------------------------
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: [
                        isFraction,
                        'full',
                        'auto',
                        themeContainer,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'nowrap',
                        'wrap',
                        'wrap-reverse'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        isNumber,
                        isFraction,
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        isInteger,
                        'first',
                        'last',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': scaleGridAutoColsRows()
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': scaleGridAutoColsRows()
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        ...scaleAlignPrimaryAxis(),
                        'normal'
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        ...scaleAlignSecondaryAxis(),
                        'normal'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...scaleAlignPrimaryAxis()
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                '',
                                'last'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                '',
                                'last'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': scaleAlignPrimaryAxis()
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        ...scaleAlignSecondaryAxis(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: scaleMargin()
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: scaleMargin()
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: scaleMargin()
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: scaleMargin()
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: scaleMargin()
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: scaleMargin()
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: scaleMargin()
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: scaleMargin()
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: scaleMargin()
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-x': [
                {
                    'space-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-y': [
                {
                    'space-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // --------------
            // --- Sizing ---
            // --------------
            /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */ size: [
                {
                    size: scaleSizing()
                }
            ],
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        themeContainer,
                        'screen',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        themeContainer,
                        'screen',
                        /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ 'none',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        themeContainer,
                        'screen',
                        'none',
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ 'prose',
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ {
                            screen: [
                                themeBreakpoint
                            ]
                        },
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        'screen',
                        'lh',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        'screen',
                        'lh',
                        'none',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        'screen',
                        'lh',
                        ...scaleSizing()
                    ]
                }
            ],
            // ------------------
            // --- Typography ---
            // ------------------
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        themeText,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        themeFontWeight,
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */ 'font-stretch': [
                {
                    'font-stretch': [
                        'ultra-condensed',
                        'extra-condensed',
                        'condensed',
                        'semi-condensed',
                        'normal',
                        'semi-expanded',
                        'expanded',
                        'extra-expanded',
                        'ultra-expanded',
                        isPercent,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isArbitraryVariableFamilyName,
                        isArbitraryValue,
                        themeFont
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        themeTracking,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        isNumber,
                        'none',
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ themeLeading,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'disc',
                        'decimal',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: scaleColor()
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: scaleColor()
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...scaleLineStyle(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        isNumber,
                        'from-font',
                        'auto',
                        isArbitraryVariable,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: scaleColor()
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        isNumber,
                        'auto',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */ wrap: [
                {
                    wrap: [
                        'break-word',
                        'anywhere',
                        'normal'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -------------------
            // --- Backgrounds ---
            // -------------------
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: scaleBgPosition()
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: scaleBgRepeat()
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: scaleBgSize()
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            linear: [
                                {
                                    to: [
                                        't',
                                        'tr',
                                        'r',
                                        'br',
                                        'b',
                                        'bl',
                                        'l',
                                        'tl'
                                    ]
                                },
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            radial: [
                                '',
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            conic: [
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryVariableImage,
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: scaleColor()
                }
            ],
            // ---------------
            // --- Borders ---
            // ---------------
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: scaleRadius()
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': scaleRadius()
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': scaleRadius()
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': scaleRadius()
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': scaleRadius()
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': scaleRadius()
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': scaleRadius()
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': scaleRadius()
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': scaleRadius()
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': scaleRadius()
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': scaleRadius()
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': scaleRadius()
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: scaleBorderWidth()
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': scaleBorderWidth()
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-x': [
                {
                    'divide-x': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-y': [
                {
                    'divide-y': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...scaleLineStyle(),
                        'hidden',
                        'none'
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */ 'divide-style': [
                {
                    divide: [
                        ...scaleLineStyle(),
                        'hidden',
                        'none'
                    ]
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: scaleColor()
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': scaleColor()
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': scaleColor()
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': scaleColor()
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': scaleColor()
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': scaleColor()
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': scaleColor()
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': scaleColor()
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': scaleColor()
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: scaleColor()
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        ...scaleLineStyle(),
                        'none',
                        'hidden'
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        '',
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: scaleColor()
                }
            ],
            // ---------------
            // --- Effects ---
            // ---------------
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        // Deprecated since Tailwind CSS v4.0.0
                        '',
                        'none',
                        themeShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */ 'shadow-color': [
                {
                    shadow: scaleColor()
                }
            ],
            /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */ 'inset-shadow': [
                {
                    'inset-shadow': [
                        'none',
                        themeInsetShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */ 'inset-shadow-color': [
                {
                    'inset-shadow': scaleColor()
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */ 'ring-w': [
                {
                    ring: scaleBorderWidth()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */ 'ring-color': [
                {
                    ring: scaleColor()
                }
            ],
            /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isNumber,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-offset-color': [
                {
                    'ring-offset': scaleColor()
                }
            ],
            /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */ 'inset-ring-w': [
                {
                    'inset-ring': scaleBorderWidth()
                }
            ],
            /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */ 'inset-ring-color': [
                {
                    'inset-ring': scaleColor()
                }
            ],
            /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */ 'text-shadow': [
                {
                    'text-shadow': [
                        'none',
                        themeTextShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */ 'text-shadow-color': [
                {
                    'text-shadow': scaleColor()
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...scaleBlendMode(),
                        'plus-darker',
                        'plus-lighter'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': scaleBlendMode()
                }
            ],
            /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */ 'mask-clip': [
                {
                    'mask-clip': [
                        'border',
                        'padding',
                        'content',
                        'fill',
                        'stroke',
                        'view'
                    ]
                },
                'mask-no-clip'
            ],
            /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */ 'mask-composite': [
                {
                    mask: [
                        'add',
                        'subtract',
                        'intersect',
                        'exclude'
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ 'mask-image-linear-pos': [
                {
                    'mask-linear': [
                        isNumber
                    ]
                }
            ],
            'mask-image-linear-from-pos': [
                {
                    'mask-linear-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-linear-to-pos': [
                {
                    'mask-linear-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-linear-from-color': [
                {
                    'mask-linear-from': scaleColor()
                }
            ],
            'mask-image-linear-to-color': [
                {
                    'mask-linear-to': scaleColor()
                }
            ],
            'mask-image-t-from-pos': [
                {
                    'mask-t-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-t-to-pos': [
                {
                    'mask-t-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-t-from-color': [
                {
                    'mask-t-from': scaleColor()
                }
            ],
            'mask-image-t-to-color': [
                {
                    'mask-t-to': scaleColor()
                }
            ],
            'mask-image-r-from-pos': [
                {
                    'mask-r-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-r-to-pos': [
                {
                    'mask-r-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-r-from-color': [
                {
                    'mask-r-from': scaleColor()
                }
            ],
            'mask-image-r-to-color': [
                {
                    'mask-r-to': scaleColor()
                }
            ],
            'mask-image-b-from-pos': [
                {
                    'mask-b-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-b-to-pos': [
                {
                    'mask-b-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-b-from-color': [
                {
                    'mask-b-from': scaleColor()
                }
            ],
            'mask-image-b-to-color': [
                {
                    'mask-b-to': scaleColor()
                }
            ],
            'mask-image-l-from-pos': [
                {
                    'mask-l-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-l-to-pos': [
                {
                    'mask-l-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-l-from-color': [
                {
                    'mask-l-from': scaleColor()
                }
            ],
            'mask-image-l-to-color': [
                {
                    'mask-l-to': scaleColor()
                }
            ],
            'mask-image-x-from-pos': [
                {
                    'mask-x-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-x-to-pos': [
                {
                    'mask-x-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-x-from-color': [
                {
                    'mask-x-from': scaleColor()
                }
            ],
            'mask-image-x-to-color': [
                {
                    'mask-x-to': scaleColor()
                }
            ],
            'mask-image-y-from-pos': [
                {
                    'mask-y-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-y-to-pos': [
                {
                    'mask-y-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-y-from-color': [
                {
                    'mask-y-from': scaleColor()
                }
            ],
            'mask-image-y-to-color': [
                {
                    'mask-y-to': scaleColor()
                }
            ],
            'mask-image-radial': [
                {
                    'mask-radial': [
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            'mask-image-radial-from-pos': [
                {
                    'mask-radial-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-radial-to-pos': [
                {
                    'mask-radial-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-radial-from-color': [
                {
                    'mask-radial-from': scaleColor()
                }
            ],
            'mask-image-radial-to-color': [
                {
                    'mask-radial-to': scaleColor()
                }
            ],
            'mask-image-radial-shape': [
                {
                    'mask-radial': [
                        'circle',
                        'ellipse'
                    ]
                }
            ],
            'mask-image-radial-size': [
                {
                    'mask-radial': [
                        {
                            closest: [
                                'side',
                                'corner'
                            ],
                            farthest: [
                                'side',
                                'corner'
                            ]
                        }
                    ]
                }
            ],
            'mask-image-radial-pos': [
                {
                    'mask-radial-at': scalePosition()
                }
            ],
            'mask-image-conic-pos': [
                {
                    'mask-conic': [
                        isNumber
                    ]
                }
            ],
            'mask-image-conic-from-pos': [
                {
                    'mask-conic-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-conic-to-pos': [
                {
                    'mask-conic-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-conic-from-color': [
                {
                    'mask-conic-from': scaleColor()
                }
            ],
            'mask-image-conic-to-color': [
                {
                    'mask-conic-to': scaleColor()
                }
            ],
            /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */ 'mask-mode': [
                {
                    mask: [
                        'alpha',
                        'luminance',
                        'match'
                    ]
                }
            ],
            /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */ 'mask-origin': [
                {
                    'mask-origin': [
                        'border',
                        'padding',
                        'content',
                        'fill',
                        'stroke',
                        'view'
                    ]
                }
            ],
            /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */ 'mask-position': [
                {
                    mask: scaleBgPosition()
                }
            ],
            /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */ 'mask-repeat': [
                {
                    mask: scaleBgRepeat()
                }
            ],
            /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */ 'mask-size': [
                {
                    mask: scaleBgSize()
                }
            ],
            /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */ 'mask-type': [
                {
                    'mask-type': [
                        'alpha',
                        'luminance'
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ 'mask-image': [
                {
                    mask: [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ---------------
            // --- Filters ---
            // ---------------
            /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        // Deprecated since Tailwind CSS v3.0.0
                        '',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: scaleBlur()
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        // Deprecated since Tailwind CSS v4.0.0
                        '',
                        'none',
                        themeDropShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */ 'drop-shadow-color': [
                {
                    'drop-shadow': scaleColor()
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        // Deprecated since Tailwind CSS v3.0.0
                        '',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': scaleBlur()
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // --------------
            // --- Tables ---
            // --------------
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // ---------------------------------
            // --- Transitions and Animation ---
            // ---------------------------------
            /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        '',
                        'all',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */ 'transition-behavior': [
                {
                    transition: [
                        'normal',
                        'discrete'
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: [
                        isNumber,
                        'initial',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'initial',
                        themeEase,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        themeAnimate,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------
            // --- Transforms ---
            // ------------------
            /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */ backface: [
                {
                    backface: [
                        'hidden',
                        'visible'
                    ]
                }
            ],
            /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */ perspective: [
                {
                    perspective: [
                        themePerspective,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */ 'perspective-origin': [
                {
                    'perspective-origin': scalePositionWithArbitrary()
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: scaleRotate()
                }
            ],
            /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-x': [
                {
                    'rotate-x': scaleRotate()
                }
            ],
            /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-y': [
                {
                    'rotate-y': scaleRotate()
                }
            ],
            /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-z': [
                {
                    'rotate-z': scaleRotate()
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: scaleScale()
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': scaleScale()
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': scaleScale()
                }
            ],
            /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-z': [
                {
                    'scale-z': scaleScale()
                }
            ],
            /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-3d': [
                'scale-3d'
            ],
            /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */ skew: [
                {
                    skew: scaleSkew()
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': scaleSkew()
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': scaleSkew()
                }
            ],
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        isArbitraryVariable,
                        isArbitraryValue,
                        '',
                        'none',
                        'gpu',
                        'cpu'
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: scalePositionWithArbitrary()
                }
            ],
            /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */ 'transform-style': [
                {
                    transform: [
                        '3d',
                        'flat'
                    ]
                }
            ],
            /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */ translate: [
                {
                    translate: scaleTranslate()
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': scaleTranslate()
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': scaleTranslate()
                }
            ],
            /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-z': [
                {
                    'translate-z': scaleTranslate()
                }
            ],
            /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-none': [
                'translate-none'
            ],
            // ---------------------
            // --- Interactivity ---
            // ---------------------
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: scaleColor()
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: scaleColor()
                }
            ],
            /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */ 'color-scheme': [
                {
                    scheme: [
                        'normal',
                        'dark',
                        'light',
                        'light-dark',
                        'only-dark',
                        'only-light'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */ 'field-sizing': [
                {
                    'field-sizing': [
                        'fixed',
                        'content'
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'auto',
                        'none'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        '',
                        'y',
                        'x'
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -----------
            // --- SVG ---
            // -----------
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        'none',
                        ...scaleColor()
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        'none',
                        ...scaleColor()
                    ]
                }
            ],
            // ---------------------
            // --- Accessibility ---
            // ---------------------
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-x',
                'border-w-y',
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-x',
                'border-color-y',
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            translate: [
                'translate-x',
                'translate-y',
                'translate-none'
            ],
            'translate-none': [
                'translate',
                'translate-x',
                'translate-y',
                'translate-z'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        },
        orderSensitiveModifiers: [
            '*',
            '**',
            'after',
            'backdrop',
            'before',
            'details-content',
            'file',
            'first-letter',
            'first-line',
            'marker',
            'placeholder',
            'selection'
        ]
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    overrideConfigProperties(baseConfig.theme, override.theme);
    overrideConfigProperties(baseConfig.classGroups, override.classGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
    overrideProperty(baseConfig, 'orderSensitiveModifiers', override.orderSensitiveModifiers);
    mergeConfigProperties(baseConfig.theme, extend.theme);
    mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
    mergeArrayProperties(baseConfig, extend, 'orderSensitiveModifiers');
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            mergeArrayProperties(baseObject, mergeObject, key);
        }
    }
};
const mergeArrayProperties = (baseObject, mergeObject, key)=>{
    const mergeValue = mergeObject[key];
    if (mergeValue !== undefined) {
        baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/create-context.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    Context.displayName = rootComponentName + "Context";
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createContext2.Provider.useMemo[value]": ()=>context
        }["createContext2.Provider.useMemo[value]"], Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        BaseContext.displayName = rootComponentName + "Context";
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createContext3.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext3.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Indicator",
    ()=>Indicator,
    "Progress",
    ()=>Progress,
    "ProgressIndicator",
    ()=>ProgressIndicator,
    "Root",
    ()=>Root,
    "createProgressScope",
    ()=>createProgressScope
]);
// src/progress.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
        console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
        console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ProgressProvider, {
        scope: __scopeProgress,
        value,
        max,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "aria-valuemax": max,
            "aria-valuemin": 0,
            "aria-valuenow": isNumber(value) ? value : void 0,
            "aria-valuetext": valueLabel,
            role: "progressbar",
            "data-state": getProgressState(value, max),
            "data-value": value ?? void 0,
            "data-max": max,
            ...progressProps,
            ref: forwardedRef
        })
    });
});
Progress.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
    });
});
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
    return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
    return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
    return typeof value === "number";
}
function isValidMaxNumber(max) {
    return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
    return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
    return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
    return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress;
var Indicator = ProgressIndicator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/iota-cthulhu-gamefi/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster,
    "toast",
    ()=>toast,
    "useSonner",
    ()=>useSonner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/iota-cthulhu-gamefi/client/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
'use client';
function __insertCSS(code) {
    if (!code || typeof document == 'undefined') return;
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
;
;
const getAsset = (type)=>{
    switch(type){
        case 'success':
            return SuccessIcon;
        case 'info':
            return InfoIcon;
        case 'warning':
            return WarningIcon;
        case 'error':
            return ErrorIcon;
        default:
            return null;
    }
};
const bars = Array(12).fill(0);
const Loader = ({ visible, className })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: [
            'sonner-loading-wrapper',
            className
        ].filter(Boolean).join(' '),
        "data-visible": visible
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "sonner-spinner"
    }, bars.map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`
        }))));
};
const SuccessIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}));
const WarningIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}));
const InfoIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}));
const ErrorIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}));
const CloseIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}));
const useIsDocumentHidden = ()=>{
    const [isDocumentHidden, setIsDocumentHidden] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(document.hidden);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useIsDocumentHidden.useEffect": ()=>{
            const callback = {
                "useIsDocumentHidden.useEffect.callback": ()=>{
                    setIsDocumentHidden(document.hidden);
                }
            }["useIsDocumentHidden.useEffect.callback"];
            document.addEventListener('visibilitychange', callback);
            return ({
                "useIsDocumentHidden.useEffect": ()=>window.removeEventListener('visibilitychange', callback)
            })["useIsDocumentHidden.useEffect"];
        }
    }["useIsDocumentHidden.useEffect"], []);
    return isDocumentHidden;
};
let toastsCounter = 1;
class Observer {
    constructor(){
        // We use arrow functions to maintain the correct `this` reference
        this.subscribe = (subscriber)=>{
            this.subscribers.push(subscriber);
            return ()=>{
                const index = this.subscribers.indexOf(subscriber);
                this.subscribers.splice(index, 1);
            };
        };
        this.publish = (data)=>{
            this.subscribers.forEach((subscriber)=>subscriber(data));
        };
        this.addToast = (data)=>{
            this.publish(data);
            this.toasts = [
                ...this.toasts,
                data
            ];
        };
        this.create = (data)=>{
            var _data_id;
            const { message, ...rest } = data;
            const id = typeof (data == null ? void 0 : data.id) === 'number' || ((_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
            const alreadyExists = this.toasts.find((toast)=>{
                return toast.id === id;
            });
            const dismissible = data.dismissible === undefined ? true : data.dismissible;
            if (this.dismissedToasts.has(id)) {
                this.dismissedToasts.delete(id);
            }
            if (alreadyExists) {
                this.toasts = this.toasts.map((toast)=>{
                    if (toast.id === id) {
                        this.publish({
                            ...toast,
                            ...data,
                            id,
                            title: message
                        });
                        return {
                            ...toast,
                            ...data,
                            id,
                            dismissible,
                            title: message
                        };
                    }
                    return toast;
                });
            } else {
                this.addToast({
                    title: message,
                    ...rest,
                    dismissible,
                    id
                });
            }
            return id;
        };
        this.dismiss = (id)=>{
            if (id) {
                this.dismissedToasts.add(id);
                requestAnimationFrame(()=>this.subscribers.forEach((subscriber)=>subscriber({
                            id,
                            dismiss: true
                        })));
            } else {
                this.toasts.forEach((toast)=>{
                    this.subscribers.forEach((subscriber)=>subscriber({
                            id: toast.id,
                            dismiss: true
                        }));
                });
            }
            return id;
        };
        this.message = (message, data)=>{
            return this.create({
                ...data,
                message
            });
        };
        this.error = (message, data)=>{
            return this.create({
                ...data,
                message,
                type: 'error'
            });
        };
        this.success = (message, data)=>{
            return this.create({
                ...data,
                type: 'success',
                message
            });
        };
        this.info = (message, data)=>{
            return this.create({
                ...data,
                type: 'info',
                message
            });
        };
        this.warning = (message, data)=>{
            return this.create({
                ...data,
                type: 'warning',
                message
            });
        };
        this.loading = (message, data)=>{
            return this.create({
                ...data,
                type: 'loading',
                message
            });
        };
        this.promise = (promise, data)=>{
            if (!data) {
                // Nothing to show
                return;
            }
            let id = undefined;
            if (data.loading !== undefined) {
                id = this.create({
                    ...data,
                    promise,
                    type: 'loading',
                    message: data.loading,
                    description: typeof data.description !== 'function' ? data.description : undefined
                });
            }
            const p = Promise.resolve(promise instanceof Function ? promise() : promise);
            let shouldDismiss = id !== undefined;
            let result;
            const originalPromise = p.then(async (response)=>{
                result = [
                    'resolve',
                    response
                ];
                const isReactElementResponse = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(response);
                if (isReactElementResponse) {
                    shouldDismiss = false;
                    this.create({
                        id,
                        type: 'default',
                        message: response
                    });
                } else if (isHttpResponse(response) && !response.ok) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(`HTTP error! status: ${response.status}`) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(`HTTP error! status: ${response.status}`) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (response instanceof Error) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(response) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                } else if (data.success !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.success === 'function' ? await data.success(response) : data.success;
                    const description = typeof data.description === 'function' ? await data.description(response) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'success',
                        description,
                        ...toastSettings
                    });
                }
            }).catch(async (error)=>{
                result = [
                    'reject',
                    error
                ];
                if (data.error !== undefined) {
                    shouldDismiss = false;
                    const promiseData = typeof data.error === 'function' ? await data.error(error) : data.error;
                    const description = typeof data.description === 'function' ? await data.description(error) : data.description;
                    const isExtendedResult = typeof promiseData === 'object' && !__TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(promiseData);
                    const toastSettings = isExtendedResult ? promiseData : {
                        message: promiseData
                    };
                    this.create({
                        id,
                        type: 'error',
                        description,
                        ...toastSettings
                    });
                }
            }).finally(()=>{
                if (shouldDismiss) {
                    // Toast is still in load state (and will be indefinitely — dismiss it)
                    this.dismiss(id);
                    id = undefined;
                }
                data.finally == null ? void 0 : data.finally.call(data);
            });
            const unwrap = ()=>new Promise((resolve, reject)=>originalPromise.then(()=>result[0] === 'reject' ? reject(result[1]) : resolve(result[1])).catch(reject));
            if (typeof id !== 'string' && typeof id !== 'number') {
                // cannot Object.assign on undefined
                return {
                    unwrap
                };
            } else {
                return Object.assign(id, {
                    unwrap
                });
            }
        };
        this.custom = (jsx, data)=>{
            const id = (data == null ? void 0 : data.id) || toastsCounter++;
            this.create({
                jsx: jsx(id),
                id,
                ...data
            });
            return id;
        };
        this.getActiveToasts = ()=>{
            return this.toasts.filter((toast)=>!this.dismissedToasts.has(toast.id));
        };
        this.subscribers = [];
        this.toasts = [];
        this.dismissedToasts = new Set();
    }
}
const ToastState = new Observer();
// bind this to the toast function
const toastFunction = (message, data)=>{
    const id = (data == null ? void 0 : data.id) || toastsCounter++;
    ToastState.addToast({
        title: message,
        ...data,
        id
    });
    return id;
};
const isHttpResponse = (data)=>{
    return data && typeof data === 'object' && 'ok' in data && typeof data.ok === 'boolean' && 'status' in data && typeof data.status === 'number';
};
const basicToast = toastFunction;
const getHistory = ()=>ToastState.toasts;
const getToasts = ()=>ToastState.getActiveToasts();
// We use `Object.assign` to maintain the correct types as we would lose them otherwise
const toast = Object.assign(basicToast, {
    success: ToastState.success,
    info: ToastState.info,
    warning: ToastState.warning,
    error: ToastState.error,
    custom: ToastState.custom,
    message: ToastState.message,
    promise: ToastState.promise,
    dismiss: ToastState.dismiss,
    loading: ToastState.loading
}, {
    getHistory,
    getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
    return action.label !== undefined;
}
// Visible toasts amount
const VISIBLE_TOASTS_AMOUNT = 3;
// Viewport padding
const VIEWPORT_OFFSET = '24px';
// Mobile viewport padding
const MOBILE_VIEWPORT_OFFSET = '16px';
// Default lifetime of a toasts (in ms)
const TOAST_LIFETIME = 4000;
// Default toast width
const TOAST_WIDTH = 356;
// Default gap between toasts
const GAP = 14;
// Threshold to dismiss a toast
const SWIPE_THRESHOLD = 45;
// Equal to exit animation duration
const TIME_BEFORE_UNMOUNT = 200;
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
function getDefaultSwipeDirections(position) {
    const [y, x] = position.split('-');
    const directions = [];
    if (y) {
        directions.push(y);
    }
    if (x) {
        directions.push(x);
    }
    return directions;
}
const Toast = (props)=>{
    var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
    const { invert: ToasterInvert, toast, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = '', descriptionClassName = '', duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = 'Close toast' } = props;
    const [swipeDirection, setSwipeDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [swipeOutDirection, setSwipeOutDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [removed, setRemoved] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swiping, setSwiping] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [swipeOut, setSwipeOut] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isSwiped, setIsSwiped] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [offsetBeforeRemove, setOffsetBeforeRemove] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [initialHeight, setInitialHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const remainingTime = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(toast.duration || durationFromToaster || TOAST_LIFETIME);
    const dragStartTime = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const toastRef = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFront = index === 0;
    const isVisible = index + 1 <= visibleToasts;
    const toastType = toast.type;
    const dismissible = toast.dismissible !== false;
    const toastClassname = toast.className || '';
    const toastDescriptionClassname = toast.descriptionClassName || '';
    // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
    const heightIndex = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[heightIndex]": ()=>heights.findIndex({
                "Toast.useMemo[heightIndex]": (height)=>height.toastId === toast.id
            }["Toast.useMemo[heightIndex]"]) || 0
    }["Toast.useMemo[heightIndex]"], [
        heights,
        toast.id
    ]);
    const closeButton = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[closeButton]": ()=>{
            var _toast_closeButton;
            return (_toast_closeButton = toast.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
        }
    }["Toast.useMemo[closeButton]"], [
        toast.closeButton,
        closeButtonFromToaster
    ]);
    const duration = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[duration]": ()=>toast.duration || durationFromToaster || TOAST_LIFETIME
    }["Toast.useMemo[duration]"], [
        toast.duration,
        durationFromToaster
    ]);
    const closeTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const lastCloseTimerStartTimeRef = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const pointerStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [y, x] = position.split('-');
    const toastsHeightBefore = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo[toastsHeightBefore]": ()=>{
            return heights.reduce({
                "Toast.useMemo[toastsHeightBefore]": (prev, curr, reducerIndex)=>{
                    // Calculate offset up until current toast
                    if (reducerIndex >= heightIndex) {
                        return prev;
                    }
                    return prev + curr.height;
                }
            }["Toast.useMemo[toastsHeightBefore]"], 0);
        }
    }["Toast.useMemo[toastsHeightBefore]"], [
        heights,
        heightIndex
    ]);
    const isDocumentHidden = useIsDocumentHidden();
    const invert = toast.invert || ToasterInvert;
    const disabled = toastType === 'loading';
    offset.current = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toast.useMemo": ()=>heightIndex * gap + toastsHeightBefore
    }["Toast.useMemo"], [
        heightIndex,
        toastsHeightBefore
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            remainingTime.current = duration;
        }
    }["Toast.useEffect"], [
        duration
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            // Trigger enter animation without using CSS animation
            setMounted(true);
        }
    }["Toast.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            const toastNode = toastRef.current;
            if (toastNode) {
                const height = toastNode.getBoundingClientRect().height;
                // Add toast height to heights array after the toast is mounted
                setInitialHeight(height);
                setHeights({
                    "Toast.useEffect": (h)=>[
                            {
                                toastId: toast.id,
                                height,
                                position: toast.position
                            },
                            ...h
                        ]
                }["Toast.useEffect"]);
                return ({
                    "Toast.useEffect": ()=>setHeights({
                            "Toast.useEffect": (h)=>h.filter({
                                    "Toast.useEffect": (height)=>height.toastId !== toast.id
                                }["Toast.useEffect"])
                        }["Toast.useEffect"])
                })["Toast.useEffect"];
            }
        }
    }["Toast.useEffect"], [
        setHeights,
        toast.id
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
        "Toast.useLayoutEffect": ()=>{
            // Keep height up to date with the content in case it updates
            if (!mounted) return;
            const toastNode = toastRef.current;
            const originalHeight = toastNode.style.height;
            toastNode.style.height = 'auto';
            const newHeight = toastNode.getBoundingClientRect().height;
            toastNode.style.height = originalHeight;
            setInitialHeight(newHeight);
            setHeights({
                "Toast.useLayoutEffect": (heights)=>{
                    const alreadyExists = heights.find({
                        "Toast.useLayoutEffect.alreadyExists": (height)=>height.toastId === toast.id
                    }["Toast.useLayoutEffect.alreadyExists"]);
                    if (!alreadyExists) {
                        return [
                            {
                                toastId: toast.id,
                                height: newHeight,
                                position: toast.position
                            },
                            ...heights
                        ];
                    } else {
                        return heights.map({
                            "Toast.useLayoutEffect": (height)=>height.toastId === toast.id ? {
                                    ...height,
                                    height: newHeight
                                } : height
                        }["Toast.useLayoutEffect"]);
                    }
                }
            }["Toast.useLayoutEffect"]);
        }
    }["Toast.useLayoutEffect"], [
        mounted,
        toast.title,
        toast.description,
        setHeights,
        toast.id,
        toast.jsx,
        toast.action,
        toast.cancel
    ]);
    const deleteToast = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toast.useCallback[deleteToast]": ()=>{
            // Save the offset for the exit swipe animation
            setRemoved(true);
            setOffsetBeforeRemove(offset.current);
            setHeights({
                "Toast.useCallback[deleteToast]": (h)=>h.filter({
                        "Toast.useCallback[deleteToast]": (height)=>height.toastId !== toast.id
                    }["Toast.useCallback[deleteToast]"])
            }["Toast.useCallback[deleteToast]"]);
            setTimeout({
                "Toast.useCallback[deleteToast]": ()=>{
                    removeToast(toast);
                }
            }["Toast.useCallback[deleteToast]"], TIME_BEFORE_UNMOUNT);
        }
    }["Toast.useCallback[deleteToast]"], [
        toast,
        removeToast,
        setHeights,
        offset
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.promise && toastType === 'loading' || toast.duration === Infinity || toast.type === 'loading') return;
            let timeoutId;
            // Pause the timer on each hover
            const pauseTimer = {
                "Toast.useEffect.pauseTimer": ()=>{
                    if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
                        // Get the elapsed time since the timer started
                        const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current;
                        remainingTime.current = remainingTime.current - elapsedTime;
                    }
                    lastCloseTimerStartTimeRef.current = new Date().getTime();
                }
            }["Toast.useEffect.pauseTimer"];
            const startTimer = {
                "Toast.useEffect.startTimer": ()=>{
                    // setTimeout(, Infinity) behaves as if the delay is 0.
                    // As a result, the toast would be closed immediately, giving the appearance that it was never rendered.
                    // See: https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#an-infinite-timeout
                    if (remainingTime.current === Infinity) return;
                    closeTimerStartTimeRef.current = new Date().getTime();
                    // Let the toast know it has started
                    timeoutId = setTimeout({
                        "Toast.useEffect.startTimer": ()=>{
                            toast.onAutoClose == null ? void 0 : toast.onAutoClose.call(toast, toast);
                            deleteToast();
                        }
                    }["Toast.useEffect.startTimer"], remainingTime.current);
                }
            }["Toast.useEffect.startTimer"];
            if (expanded || interacting || isDocumentHidden) {
                pauseTimer();
            } else {
                startTimer();
            }
            return ({
                "Toast.useEffect": ()=>clearTimeout(timeoutId)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        expanded,
        interacting,
        toast,
        toastType,
        isDocumentHidden,
        deleteToast
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toast.useEffect": ()=>{
            if (toast.delete) {
                deleteToast();
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
            }
        }
    }["Toast.useEffect"], [
        deleteToast,
        toast.delete
    ]);
    function getLoadingIcon() {
        var _toast_classNames;
        if (icons == null ? void 0 : icons.loading) {
            var _toast_classNames1;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1.loader, 'sonner-loader'),
                "data-visible": toastType === 'loading'
            }, icons.loading);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Loader, {
            className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.loader),
            visible: toastType === 'loading'
        });
    }
    const icon = toast.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
    var _toast_richColors, _icons_close;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
        tabIndex: 0,
        ref: toastRef,
        className: cn(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames.default, classNames == null ? void 0 : classNames[toastType], toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1[toastType]),
        "data-sonner-toast": "",
        "data-rich-colors": (_toast_richColors = toast.richColors) != null ? _toast_richColors : defaultRichColors,
        "data-styled": !Boolean(toast.jsx || toast.unstyled || unstyled),
        "data-mounted": mounted,
        "data-promise": Boolean(toast.promise),
        "data-swiped": isSwiped,
        "data-removed": removed,
        "data-visible": isVisible,
        "data-y-position": y,
        "data-x-position": x,
        "data-index": index,
        "data-front": isFront,
        "data-swiping": swiping,
        "data-dismissible": dismissible,
        "data-type": toastType,
        "data-invert": invert,
        "data-swipe-out": swipeOut,
        "data-swipe-direction": swipeOutDirection,
        "data-expanded": Boolean(expanded || expandByDefault && mounted),
        "data-testid": toast.testId,
        style: {
            '--index': index,
            '--toasts-before': index,
            '--z-index': toasts.length - index,
            '--offset': `${removed ? offsetBeforeRemove : offset.current}px`,
            '--initial-height': expandByDefault ? 'auto' : `${initialHeight}px`,
            ...style,
            ...toast.style
        },
        onDragEnd: ()=>{
            setSwiping(false);
            setSwipeDirection(null);
            pointerStartRef.current = null;
        },
        onPointerDown: (event)=>{
            if (event.button === 2) return; // Return early on right click
            if (disabled || !dismissible) return;
            dragStartTime.current = new Date();
            setOffsetBeforeRemove(offset.current);
            // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
            event.target.setPointerCapture(event.pointerId);
            if (event.target.tagName === 'BUTTON') return;
            setSwiping(true);
            pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        },
        onPointerUp: ()=>{
            var _toastRef_current, _toastRef_current1, _dragStartTime_current;
            if (swipeOut || !dismissible) return;
            pointerStartRef.current = null;
            const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue('--swipe-amount-x').replace('px', '')) || 0);
            const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue('--swipe-amount-y').replace('px', '')) || 0);
            const timeTaken = new Date().getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
            const swipeAmount = swipeDirection === 'x' ? swipeAmountX : swipeAmountY;
            const velocity = Math.abs(swipeAmount) / timeTaken;
            if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
                setOffsetBeforeRemove(offset.current);
                toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
                if (swipeDirection === 'x') {
                    setSwipeOutDirection(swipeAmountX > 0 ? 'right' : 'left');
                } else {
                    setSwipeOutDirection(swipeAmountY > 0 ? 'down' : 'up');
                }
                deleteToast();
                setSwipeOut(true);
                return;
            } else {
                var _toastRef_current2, _toastRef_current3;
                (_toastRef_current2 = toastRef.current) == null ? void 0 : _toastRef_current2.style.setProperty('--swipe-amount-x', `0px`);
                (_toastRef_current3 = toastRef.current) == null ? void 0 : _toastRef_current3.style.setProperty('--swipe-amount-y', `0px`);
            }
            setIsSwiped(false);
            setSwiping(false);
            setSwipeDirection(null);
        },
        onPointerMove: (event)=>{
            var _window_getSelection, _toastRef_current, _toastRef_current1;
            if (!pointerStartRef.current || !dismissible) return;
            const isHighlighted = ((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0;
            if (isHighlighted) return;
            const yDelta = event.clientY - pointerStartRef.current.y;
            const xDelta = event.clientX - pointerStartRef.current.x;
            var _props_swipeDirections;
            const swipeDirections = (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
            // Determine swipe direction if not already locked
            if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) {
                setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y');
            }
            let swipeAmount = {
                x: 0,
                y: 0
            };
            const getDampening = (delta)=>{
                const factor = Math.abs(delta) / 20;
                return 1 / (1.5 + factor);
            };
            // Only apply swipe in the locked direction
            if (swipeDirection === 'y') {
                // Handle vertical swipes
                if (swipeDirections.includes('top') || swipeDirections.includes('bottom')) {
                    if (swipeDirections.includes('top') && yDelta < 0 || swipeDirections.includes('bottom') && yDelta > 0) {
                        swipeAmount.y = yDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = yDelta * getDampening(yDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
                    }
                }
            } else if (swipeDirection === 'x') {
                // Handle horizontal swipes
                if (swipeDirections.includes('left') || swipeDirections.includes('right')) {
                    if (swipeDirections.includes('left') && xDelta < 0 || swipeDirections.includes('right') && xDelta > 0) {
                        swipeAmount.x = xDelta;
                    } else {
                        // Smoothly transition to dampened movement
                        const dampenedDelta = xDelta * getDampening(xDelta);
                        // Ensure we don't jump when transitioning to dampened movement
                        swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
                    }
                }
            }
            if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
                setIsSwiped(true);
            }
            (_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.setProperty('--swipe-amount-x', `${swipeAmount.x}px`);
            (_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.setProperty('--swipe-amount-y', `${swipeAmount.y}px`);
        }
    }, closeButton && !toast.jsx && toastType !== 'loading' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "aria-label": closeButtonAriaLabel,
        "data-disabled": disabled,
        "data-close-button": true,
        onClick: disabled || !dismissible ? ()=>{} : ()=>{
            deleteToast();
            toast.onDismiss == null ? void 0 : toast.onDismiss.call(toast, toast);
        },
        className: cn(classNames == null ? void 0 : classNames.closeButton, toast == null ? void 0 : (_toast_classNames2 = toast.classNames) == null ? void 0 : _toast_classNames2.closeButton)
    }, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast.icon || toast.promise) && toast.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast.icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-icon": "",
        className: cn(classNames == null ? void 0 : classNames.icon, toast == null ? void 0 : (_toast_classNames3 = toast.classNames) == null ? void 0 : _toast_classNames3.icon)
    }, toast.promise || toast.type === 'loading' && !toast.icon ? toast.icon || getLoadingIcon() : null, toast.type !== 'loading' ? icon : null) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-content": "",
        className: cn(classNames == null ? void 0 : classNames.content, toast == null ? void 0 : (_toast_classNames4 = toast.classNames) == null ? void 0 : _toast_classNames4.content)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-title": "",
        className: cn(classNames == null ? void 0 : classNames.title, toast == null ? void 0 : (_toast_classNames5 = toast.classNames) == null ? void 0 : _toast_classNames5.title)
    }, toast.jsx ? toast.jsx : typeof toast.title === 'function' ? toast.title() : toast.title), toast.description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        "data-description": "",
        className: cn(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast == null ? void 0 : (_toast_classNames6 = toast.classNames) == null ? void 0 : _toast_classNames6.description)
    }, typeof toast.description === 'function' ? toast.description() : toast.description) : null), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.cancel) ? toast.cancel : toast.cancel && isAction(toast.cancel) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-cancel": true,
        style: toast.cancelButtonStyle || cancelButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.cancel)) return;
            if (!dismissible) return;
            toast.cancel.onClick == null ? void 0 : toast.cancel.onClick.call(toast.cancel, event);
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.cancelButton, toast == null ? void 0 : (_toast_classNames7 = toast.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
    }, toast.cancel.label) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toast.action) ? toast.action : toast.action && isAction(toast.action) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        "data-button": true,
        "data-action": true,
        style: toast.actionButtonStyle || actionButtonStyle,
        onClick: (event)=>{
            // We need to check twice because typescript
            if (!isAction(toast.action)) return;
            toast.action.onClick == null ? void 0 : toast.action.onClick.call(toast.action, event);
            if (event.defaultPrevented) return;
            deleteToast();
        },
        className: cn(classNames == null ? void 0 : classNames.actionButton, toast == null ? void 0 : (_toast_classNames8 = toast.classNames) == null ? void 0 : _toast_classNames8.actionButton)
    }, toast.action.label) : null);
};
function getDocumentDirection() {
    if (typeof window === 'undefined') return 'ltr';
    if (typeof document === 'undefined') return 'ltr'; // For Fresh purpose
    const dirAttribute = document.documentElement.getAttribute('dir');
    if (dirAttribute === 'auto' || !dirAttribute) {
        return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
}
function assignOffset(defaultOffset, mobileOffset) {
    const styles = {};
    [
        defaultOffset,
        mobileOffset
    ].forEach((offset, index)=>{
        const isMobile = index === 1;
        const prefix = isMobile ? '--mobile-offset' : '--offset';
        const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
        function assignAll(offset) {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                styles[`${prefix}-${key}`] = typeof offset === 'number' ? `${offset}px` : offset;
            });
        }
        if (typeof offset === 'number' || typeof offset === 'string') {
            assignAll(offset);
        } else if (typeof offset === 'object') {
            [
                'top',
                'right',
                'bottom',
                'left'
            ].forEach((key)=>{
                if (offset[key] === undefined) {
                    styles[`${prefix}-${key}`] = defaultValue;
                } else {
                    styles[`${prefix}-${key}`] = typeof offset[key] === 'number' ? `${offset[key]}px` : offset[key];
                }
            });
        } else {
            assignAll(defaultValue);
        }
    });
    return styles;
}
function useSonner() {
    const [activeToasts, setActiveToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useSonner.useEffect": ()=>{
            return ToastState.subscribe({
                "useSonner.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        setTimeout({
                            "useSonner.useEffect": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                    "useSonner.useEffect": ()=>{
                                        setActiveToasts({
                                            "useSonner.useEffect": (toasts)=>toasts.filter({
                                                    "useSonner.useEffect": (t)=>t.id !== toast.id
                                                }["useSonner.useEffect"])
                                        }["useSonner.useEffect"]);
                                    }
                                }["useSonner.useEffect"]);
                            }
                        }["useSonner.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "useSonner.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "useSonner.useEffect": ()=>{
                                    setActiveToasts({
                                        "useSonner.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "useSonner.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["useSonner.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["useSonner.useEffect"]);
                                }
                            }["useSonner.useEffect"]);
                        }
                    }["useSonner.useEffect"]);
                }
            }["useSonner.useEffect"]);
        }
    }["useSonner.useEffect"], []);
    return {
        toasts: activeToasts
    };
}
const Toaster = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function Toaster(props, ref) {
    const { id, invert, position = 'bottom-right', hotkey = [
        'altKey',
        'KeyT'
    ], expand, closeButton, className, offset, mobileOffset, theme = 'light', richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, containerAriaLabel = 'Notifications' } = props;
    const [toasts, setToasts] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const filteredToasts = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[filteredToasts]": ()=>{
            if (id) {
                return toasts.filter({
                    "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>toast.toasterId === id
                }["Toaster.Toaster.useMemo[filteredToasts]"]);
            }
            return toasts.filter({
                "Toaster.Toaster.useMemo[filteredToasts]": (toast)=>!toast.toasterId
            }["Toaster.Toaster.useMemo[filteredToasts]"]);
        }
    }["Toaster.Toaster.useMemo[filteredToasts]"], [
        toasts,
        id
    ]);
    const possiblePositions = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Toaster.Toaster.useMemo[possiblePositions]": ()=>{
            return Array.from(new Set([
                position
            ].concat(filteredToasts.filter({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]).map({
                "Toaster.Toaster.useMemo[possiblePositions]": (toast)=>toast.position
            }["Toaster.Toaster.useMemo[possiblePositions]"]))));
        }
    }["Toaster.Toaster.useMemo[possiblePositions]"], [
        filteredToasts,
        position
    ]);
    const [heights, setHeights] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [interacting, setInteracting] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [actualTheme, setActualTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(theme !== 'system' ? theme : typeof window !== 'undefined' ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');
    const listRef = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isFocusWithinRef = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const removeToast = __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Toaster.Toaster.useCallback[removeToast]": (toastToRemove)=>{
            setToasts({
                "Toaster.Toaster.useCallback[removeToast]": (toasts)=>{
                    var _toasts_find;
                    if (!((_toasts_find = toasts.find({
                        "Toaster.Toaster.useCallback[removeToast]": (toast)=>toast.id === toastToRemove.id
                    }["Toaster.Toaster.useCallback[removeToast]"])) == null ? void 0 : _toasts_find.delete)) {
                        ToastState.dismiss(toastToRemove.id);
                    }
                    return toasts.filter({
                        "Toaster.Toaster.useCallback[removeToast]": ({ id })=>id !== toastToRemove.id
                    }["Toaster.Toaster.useCallback[removeToast]"]);
                }
            }["Toaster.Toaster.useCallback[removeToast]"]);
        }
    }["Toaster.Toaster.useCallback[removeToast]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            return ToastState.subscribe({
                "Toaster.Toaster.useEffect": (toast)=>{
                    if (toast.dismiss) {
                        // Prevent batching of other state updates
                        requestAnimationFrame({
                            "Toaster.Toaster.useEffect": ()=>{
                                setToasts({
                                    "Toaster.Toaster.useEffect": (toasts)=>toasts.map({
                                            "Toaster.Toaster.useEffect": (t)=>t.id === toast.id ? {
                                                    ...t,
                                                    delete: true
                                                } : t
                                        }["Toaster.Toaster.useEffect"])
                                }["Toaster.Toaster.useEffect"]);
                            }
                        }["Toaster.Toaster.useEffect"]);
                        return;
                    }
                    // Prevent batching, temp solution.
                    setTimeout({
                        "Toaster.Toaster.useEffect": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync({
                                "Toaster.Toaster.useEffect": ()=>{
                                    setToasts({
                                        "Toaster.Toaster.useEffect": (toasts)=>{
                                            const indexOfExistingToast = toasts.findIndex({
                                                "Toaster.Toaster.useEffect.indexOfExistingToast": (t)=>t.id === toast.id
                                            }["Toaster.Toaster.useEffect.indexOfExistingToast"]);
                                            // Update the toast if it already exists
                                            if (indexOfExistingToast !== -1) {
                                                return [
                                                    ...toasts.slice(0, indexOfExistingToast),
                                                    {
                                                        ...toasts[indexOfExistingToast],
                                                        ...toast
                                                    },
                                                    ...toasts.slice(indexOfExistingToast + 1)
                                                ];
                                            }
                                            return [
                                                toast,
                                                ...toasts
                                            ];
                                        }
                                    }["Toaster.Toaster.useEffect"]);
                                }
                            }["Toaster.Toaster.useEffect"]);
                        }
                    }["Toaster.Toaster.useEffect"]);
                }
            }["Toaster.Toaster.useEffect"]);
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (theme !== 'system') {
                setActualTheme(theme);
                return;
            }
            if (theme === 'system') {
                // check if current preference is dark
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    // it's currently dark
                    setActualTheme('dark');
                } else {
                    // it's not dark
                    setActualTheme('light');
                }
            }
            if (typeof window === 'undefined') return;
            const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            try {
                // Chrome & Firefox
                darkMediaQuery.addEventListener('change', {
                    "Toaster.Toaster.useEffect": ({ matches })=>{
                        if (matches) {
                            setActualTheme('dark');
                        } else {
                            setActualTheme('light');
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            } catch (error) {
                // Safari < 14
                darkMediaQuery.addListener({
                    "Toaster.Toaster.useEffect": ({ matches })=>{
                        try {
                            if (matches) {
                                setActualTheme('dark');
                            } else {
                                setActualTheme('light');
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }["Toaster.Toaster.useEffect"]);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        theme
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            // Ensure expanded is always false when no toasts are present / only one left
            if (toasts.length <= 1) {
                setExpanded(false);
            }
        }
    }["Toaster.Toaster.useEffect"], [
        toasts
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            const handleKeyDown = {
                "Toaster.Toaster.useEffect.handleKeyDown": (event)=>{
                    var _listRef_current;
                    const isHotkeyPressed = hotkey.every({
                        "Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed": (key)=>event[key] || event.code === key
                    }["Toaster.Toaster.useEffect.handleKeyDown.isHotkeyPressed"]);
                    if (isHotkeyPressed) {
                        var _listRef_current1;
                        setExpanded(true);
                        (_listRef_current1 = listRef.current) == null ? void 0 : _listRef_current1.focus();
                    }
                    if (event.code === 'Escape' && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) {
                        setExpanded(false);
                    }
                }
            }["Toaster.Toaster.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "Toaster.Toaster.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["Toaster.Toaster.useEffect"];
        }
    }["Toaster.Toaster.useEffect"], [
        hotkey
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Toaster.Toaster.useEffect": ()=>{
            if (listRef.current) {
                return ({
                    "Toaster.Toaster.useEffect": ()=>{
                        if (lastFocusedElementRef.current) {
                            lastFocusedElementRef.current.focus({
                                preventScroll: true
                            });
                            lastFocusedElementRef.current = null;
                            isFocusWithinRef.current = false;
                        }
                    }
                })["Toaster.Toaster.useEffect"];
            }
        }
    }["Toaster.Toaster.useEffect"], [
        listRef.current
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: ref,
        "aria-label": `${containerAriaLabel} ${hotkeyLabel}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: true
    }, possiblePositions.map((position, index)=>{
        var _heights_;
        const [y, x] = position.split('-');
        if (!filteredToasts.length) return null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ol", {
            key: position,
            dir: dir === 'auto' ? getDocumentDirection() : dir,
            tabIndex: -1,
            ref: listRef,
            className: className,
            "data-sonner-toaster": true,
            "data-sonner-theme": actualTheme,
            "data-y-position": y,
            "data-x-position": x,
            style: {
                '--front-toast-height': `${((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0}px`,
                '--width': `${TOAST_WIDTH}px`,
                '--gap': `${gap}px`,
                ...style,
                ...assignOffset(offset, mobileOffset)
            },
            onBlur: (event)=>{
                if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
                    isFocusWithinRef.current = false;
                    if (lastFocusedElementRef.current) {
                        lastFocusedElementRef.current.focus({
                            preventScroll: true
                        });
                        lastFocusedElementRef.current = null;
                    }
                }
            },
            onFocus: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                if (!isFocusWithinRef.current) {
                    isFocusWithinRef.current = true;
                    lastFocusedElementRef.current = event.relatedTarget;
                }
            },
            onMouseEnter: ()=>setExpanded(true),
            onMouseMove: ()=>setExpanded(true),
            onMouseLeave: ()=>{
                // Avoid setting expanded to false when interacting with a toast, e.g. swiping
                if (!interacting) {
                    setExpanded(false);
                }
            },
            onDragEnd: ()=>setExpanded(false),
            onPointerDown: (event)=>{
                const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';
                if (isNotDismissible) return;
                setInteracting(true);
            },
            onPointerUp: ()=>setInteracting(false)
        }, filteredToasts.filter((toast)=>!toast.position && index === 0 || toast.position === position).map((toast, index)=>{
            var _toastOptions_duration, _toastOptions_closeButton;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$iota$2d$cthulhu$2d$gamefi$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Toast, {
                key: toast.id,
                icons: icons,
                index: index,
                toast: toast,
                defaultRichColors: richColors,
                duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
                className: toastOptions == null ? void 0 : toastOptions.className,
                descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
                invert: invert,
                visibleToasts: visibleToasts,
                closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
                interacting: interacting,
                position: position,
                style: toastOptions == null ? void 0 : toastOptions.style,
                unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
                classNames: toastOptions == null ? void 0 : toastOptions.classNames,
                cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
                actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
                closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
                removeToast: removeToast,
                toasts: filteredToasts.filter((t)=>t.position == toast.position),
                heights: heights.filter((h)=>h.position == toast.position),
                setHeights: setHeights,
                expandByDefault: expand,
                gap: gap,
                expanded: expanded,
                swipeDirections: props.swipeDirections
            });
        }));
    }));
});
;
}),
]);

//# sourceMappingURL=fc7e5_fdd152bb._.js.map