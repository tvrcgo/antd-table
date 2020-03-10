"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var antd_1 = require("antd");
require("./index.less");
var DataTable = /** @class */ (function (_super) {
    __extends(DataTable, _super);
    function DataTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedRowKeys: [],
            selectedRows: [],
            loading: !!_this.props.loading || false,
            data: [],
            page: {
                current: 1,
                pageSize: 10,
                total: 0
            }
        };
        _this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = this.state.page;
                        return [4 /*yield*/, this.fetch(page.current, page.pageSize)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.fetch = function (page, size) { return __awaiter(_this, void 0, void 0, function () {
            var _a, onFetch, dataSource, source;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onFetch = _a.onFetch, dataSource = _a.dataSource;
                        if (!onFetch) return [3 /*break*/, 2];
                        return [4 /*yield*/, onFetch(page, size)];
                    case 1:
                        source = _b.sent();
                        if (source && source.data && source.total) {
                            this.setState({
                                data: source.data,
                                page: {
                                    current: page,
                                    pageSize: size,
                                    total: source.total
                                }
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (dataSource) {
                            // 静态数据
                            this.setState({
                                data: dataSource,
                                page: {
                                    current: page,
                                    pageSize: size,
                                    total: dataSource.length
                                }
                            });
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    DataTable.prototype.componentDidMount = function () {
        this.refresh();
    };
    DataTable.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.state, selectedRowKeys = _b.selectedRowKeys, selectedRows = _b.selectedRows, loading = _b.loading, data = _b.data, page = _b.page;
        var _c = this.props, title = _c.title, onFetch = _c.onFetch, onChange = _c.onChange, multiSelect = _c.multiSelect, rowAction = _c.rowAction, rowActionTitle = _c.rowActionTitle, _d = _c.batchAction, batchAction = _d === void 0 ? [] : _d, props = __rest(_c, ["title", "onFetch", "onChange", "multiSelect", "rowAction", "rowActionTitle", "batchAction"]);
        // 翻页
        var pagination = __assign(__assign({}, page), { onChange: function (page, size) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fetch(page, size)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, showSizeChanger: false, onShowSizeChange: function (page, size) {
                _this.setState({
                    page: __assign(__assign({}, _this.state.page), { current: page, pageSize: size })
                });
            } });
        // 多选
        var rowSelection = {
            selectedRowKeys: selectedRowKeys,
            hideDefaultSelections: true,
            onChange: function (rowKeys, rows) {
                _this.setState({
                    selectedRowKeys: rowKeys,
                    selectedRows: rows
                });
                onChange && onChange(rows);
            }
        };
        // 操作区
        var columns = rowAction ? (_a = props.columns) === null || _a === void 0 ? void 0 : _a.concat({
            title: rowActionTitle || '操作',
            width: '15%',
            render: function (_, row) {
                return (React.createElement("ul", { className: 'row-action' }, rowAction.map(function (action, i) { return (React.createElement("li", { key: "act-" + i },
                    React.createElement("a", { key: i, href: 'javascript:;', onClick: function () { return action.props.onClick(row); } }, action.props.children))); })));
            }
        }) : props.columns;
        return (React.createElement("div", { className: 'component-table' },
            React.createElement("div", { className: 'table-header' },
                React.createElement("h2", { className: 'title' }, title === null || title === void 0 ? void 0 : title.call(this, {})),
                React.createElement("div", { className: 'batch-action' }, batchAction.map(function (action, i) { return (React.createElement(antd_1.Button, { key: i, onClick: function () { return action.props.onClick(selectedRows); }, type: action.props.type || 'primary', disabled: loading }, action.props.children)); }))),
            React.createElement(antd_1.Spin, { spinning: loading },
                React.createElement(antd_1.Table, __assign({ size: 'middle', rowKey: function (row) { return row._id || row.id; } }, props, { columns: columns, dataSource: data, pagination: pagination, rowSelection: multiSelect && rowSelection || {} })))));
    };
    return DataTable;
}(React.Component));
exports.default = DataTable;
exports.Action = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React.cloneElement(children, props);
};
