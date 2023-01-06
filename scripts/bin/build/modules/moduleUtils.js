import { cjsDirname } from '../../scriptUtils';
/**
 * Build the AST representation of a `require` function to use with the transpiled IIFEs
 */
export const requireCreator = (createObj) => ({
    type: 'FunctionDeclaration',
    id: {
        type: 'Identifier',
        name: 'require',
    },
    params: [
        {
            type: 'Identifier',
            name: 'x',
        },
    ],
    body: {
        type: 'BlockStatement',
        body: [
            {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'result',
                        },
                        init: {
                            type: 'MemberExpression',
                            computed: true,
                            property: {
                                type: 'Identifier',
                                name: 'x',
                            },
                            object: {
                                type: 'ObjectExpression',
                                properties: Object.entries(createObj)
                                    .map(([key, value]) => ({
                                    type: 'Property',
                                    kind: 'init',
                                    key: {
                                        type: 'Literal',
                                        value: key,
                                    },
                                    value: {
                                        type: 'Identifier',
                                        name: value,
                                    },
                                })),
                            },
                        },
                    },
                ],
            },
            {
                type: 'IfStatement',
                test: {
                    type: 'BinaryExpression',
                    left: {
                        type: 'Identifier',
                        name: 'result',
                    },
                    operator: '===',
                    right: {
                        type: 'Identifier',
                        name: 'undefined',
                    },
                },
                consequent: {
                    type: 'ThrowStatement',
                    argument: {
                        type: 'NewExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'Error',
                        },
                        arguments: [
                            {
                                type: 'TemplateLiteral',
                                expressions: [
                                    {
                                        type: 'Identifier',
                                        name: 'x',
                                    },
                                ],
                                quasis: [
                                    {
                                        type: 'TemplateElement',
                                        value: {
                                            raw: 'Unknown import "',
                                        },
                                        tail: false,
                                    },
                                    {
                                        type: 'TemplateElement',
                                        value: {
                                            raw: '"!',
                                        },
                                        tail: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                alternate: {
                    type: 'ReturnStatement',
                    argument: {
                        type: 'Identifier',
                        name: 'result',
                    },
                },
            },
        ],
    },
});
export const esbuildOptions = {
    bundle: true,
    external: ['react', 'react-dom', 'js-slang/moduleHelpers'],
    format: 'iife',
    globalName: 'module',
    inject: [`${cjsDirname(import.meta.url)}/import-shim.js`],
    loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
    },
    metafile: true,
    minify: true,
    platform: 'browser',
    target: 'es6',
    write: false,
};
