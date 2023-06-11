(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "ts-invariant"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("ts-invariant"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.tsInvariant);
    global.unknown = mod.exports;
  }
})(this, function (_exports, _react, _tsInvariant) {

  _exports.__esModule = true;
  _exports.getApolloContext = getApolloContext;
  _exports.operationName = operationName;
  _exports.parser = parser;
  _exports.resetApolloContext = resetApolloContext;
  _exports.DocumentType = _exports.ApolloProvider = _exports.ApolloConsumer = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var apolloContext;

  function getApolloContext() {
    if (!apolloContext) {
      apolloContext = _react.default.createContext({});
    }

    return apolloContext;
  }

  function resetApolloContext() {
    apolloContext = _react.default.createContext({});
  }

  var ApolloProvider = function (_a) {
    var client = _a.client,
        children = _a.children;
    var ApolloContext = getApolloContext();
    return _react.default.createElement(ApolloContext.Consumer, null, function (context) {
      if (context === void 0) {
        context = {};
      }

      if (client && context.client !== client) {
        context = Object.assign({}, context, {
          client: client
        });
      }

      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(context.client, 5) : (0, _tsInvariant.invariant)(context.client, 'ApolloProvider was not passed a client instance. Make ' + 'sure you pass in your client via the "client" prop.');
      return _react.default.createElement(ApolloContext.Provider, {
        value: context
      }, children);
    });
  };

  _exports.ApolloProvider = ApolloProvider;

  var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return _react.default.createElement(ApolloContext.Consumer, null, function (context) {
      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(context && context.client, 6) : (0, _tsInvariant.invariant)(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' + 'Wrap the root component in an <ApolloProvider>.');
      return props.children(context.client);
    });
  };

  _exports.ApolloConsumer = ApolloConsumer;
  var DocumentType;
  _exports.DocumentType = DocumentType;

  (function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
  })(DocumentType || (_exports.DocumentType = DocumentType = {}));

  var cache = new Map();

  function operationName(type) {
    var name;

    switch (type) {
      case DocumentType.Query:
        name = 'Query';
        break;

      case DocumentType.Mutation:
        name = 'Mutation';
        break;

      case DocumentType.Subscription:
        name = 'Subscription';
        break;
    }

    return name;
  }

  function parser(document) {
    var cached = cache.get(document);
    if (cached) return cached;
    var variables, type, name;
    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!!document && !!document.kind, 1) : (0, _tsInvariant.invariant)(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " + "DocumentNode. You may need to use 'graphql-tag' or another method " + "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) {
      return x.kind === 'FragmentDefinition';
    });
    var queries = document.definitions.filter(function (x) {
      return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
      return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
      return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!fragments.length || queries.length || mutations.length || subscriptions.length, 2) : (0, _tsInvariant.invariant)(!fragments.length || queries.length || mutations.length || subscriptions.length, "Passing only a fragment to 'graphql' is not yet supported. " + "You must include a query, subscription or mutation as well");
    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(queries.length + mutations.length + subscriptions.length <= 1, 3) : (0, _tsInvariant.invariant)(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + (document + " had " + queries.length + " queries, " + subscriptions.length + " ") + ("subscriptions and " + mutations.length + " mutations. ") + "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length) type = DocumentType.Subscription;
    var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(definitions.length === 1, 4) : (0, _tsInvariant.invariant)(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " + (definitions.length + " definitions. ") + "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];

    if (definition.name && definition.name.kind === 'Name') {
      name = definition.name.value;
    } else {
      name = 'data';
    }

    var payload = {
      name: name,
      type: type,
      variables: variables
    };
    cache.set(document, payload);
    return payload;
  } 

});
