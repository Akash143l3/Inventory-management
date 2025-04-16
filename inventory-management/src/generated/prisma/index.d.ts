
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model orderdetail
 * 
 */
export type orderdetail = $Result.DefaultSelection<Prisma.$orderdetailPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model stock
 * 
 */
export type stock = $Result.DefaultSelection<Prisma.$stockPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderdetail`: Exposes CRUD operations for the **orderdetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderdetails
    * const orderdetails = await prisma.orderdetail.findMany()
    * ```
    */
  get orderdetail(): Prisma.orderdetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.stockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    order: 'order',
    orderdetail: 'orderdetail',
    product: 'product',
    stock: 'stock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order" | "orderdetail" | "product" | "stock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      orderdetail: {
        payload: Prisma.$orderdetailPayload<ExtArgs>
        fields: Prisma.orderdetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderdetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderdetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          findFirst: {
            args: Prisma.orderdetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderdetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          findMany: {
            args: Prisma.orderdetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>[]
          }
          create: {
            args: Prisma.orderdetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          createMany: {
            args: Prisma.orderdetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderdetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          update: {
            args: Prisma.orderdetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          deleteMany: {
            args: Prisma.orderdetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderdetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderdetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderdetailPayload>
          }
          aggregate: {
            args: Prisma.OrderdetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderdetail>
          }
          groupBy: {
            args: Prisma.orderdetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderdetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderdetailCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      stock: {
        payload: Prisma.$stockPayload<ExtArgs>
        fields: Prisma.stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findFirst: {
            args: Prisma.stockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findMany: {
            args: Prisma.stockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          create: {
            args: Prisma.stockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          createMany: {
            args: Prisma.stockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          update: {
            args: Prisma.stockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          deleteMany: {
            args: Prisma.stockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.stockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.stockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order?: orderOmit
    orderdetail?: orderdetailOmit
    product?: productOmit
    stock?: stockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderdetail: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | OrderCountOutputTypeCountOrderdetailArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderdetailWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderdetail: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | ProductCountOutputTypeCountOrderdetailArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderdetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    OrderID: number | null
    CustomerID: number | null
  }

  export type OrderSumAggregateOutputType = {
    OrderID: number | null
    CustomerID: number | null
  }

  export type OrderMinAggregateOutputType = {
    OrderID: number | null
    OrderDate: Date | null
    CustomerID: number | null
  }

  export type OrderMaxAggregateOutputType = {
    OrderID: number | null
    OrderDate: Date | null
    CustomerID: number | null
  }

  export type OrderCountAggregateOutputType = {
    OrderID: number
    OrderDate: number
    CustomerID: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    OrderID?: true
    CustomerID?: true
  }

  export type OrderSumAggregateInputType = {
    OrderID?: true
    CustomerID?: true
  }

  export type OrderMinAggregateInputType = {
    OrderID?: true
    OrderDate?: true
    CustomerID?: true
  }

  export type OrderMaxAggregateInputType = {
    OrderID?: true
    OrderDate?: true
    CustomerID?: true
  }

  export type OrderCountAggregateInputType = {
    OrderID?: true
    OrderDate?: true
    CustomerID?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    OrderID: number
    OrderDate: Date
    CustomerID: number | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    OrderDate?: boolean
    CustomerID?: boolean
    orderdetail?: boolean | order$orderdetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type orderSelectScalar = {
    OrderID?: boolean
    OrderDate?: boolean
    CustomerID?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderID" | "OrderDate" | "CustomerID", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | order$orderdetailArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      orderdetail: Prisma.$orderdetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderID: number
      OrderDate: Date
      CustomerID: number | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `OrderID`
     * const orderWithOrderIDOnly = await prisma.order.findMany({ select: { OrderID: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderdetail<T extends order$orderdetailArgs<ExtArgs> = {}>(args?: Subset<T, order$orderdetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly OrderID: FieldRef<"order", 'Int'>
    readonly OrderDate: FieldRef<"order", 'DateTime'>
    readonly CustomerID: FieldRef<"order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.orderdetail
   */
  export type order$orderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    where?: orderdetailWhereInput
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    cursor?: orderdetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model orderdetail
   */

  export type AggregateOrderdetail = {
    _count: OrderdetailCountAggregateOutputType | null
    _avg: OrderdetailAvgAggregateOutputType | null
    _sum: OrderdetailSumAggregateOutputType | null
    _min: OrderdetailMinAggregateOutputType | null
    _max: OrderdetailMaxAggregateOutputType | null
  }

  export type OrderdetailAvgAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    ProductID: number | null
    Quantity: number | null
    Price: number | null
  }

  export type OrderdetailSumAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    ProductID: number | null
    Quantity: number | null
    Price: number | null
  }

  export type OrderdetailMinAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    ProductID: number | null
    Quantity: number | null
    Price: number | null
  }

  export type OrderdetailMaxAggregateOutputType = {
    OrderDetailID: number | null
    OrderID: number | null
    ProductID: number | null
    Quantity: number | null
    Price: number | null
  }

  export type OrderdetailCountAggregateOutputType = {
    OrderDetailID: number
    OrderID: number
    ProductID: number
    Quantity: number
    Price: number
    _all: number
  }


  export type OrderdetailAvgAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    ProductID?: true
    Quantity?: true
    Price?: true
  }

  export type OrderdetailSumAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    ProductID?: true
    Quantity?: true
    Price?: true
  }

  export type OrderdetailMinAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    ProductID?: true
    Quantity?: true
    Price?: true
  }

  export type OrderdetailMaxAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    ProductID?: true
    Quantity?: true
    Price?: true
  }

  export type OrderdetailCountAggregateInputType = {
    OrderDetailID?: true
    OrderID?: true
    ProductID?: true
    Quantity?: true
    Price?: true
    _all?: true
  }

  export type OrderdetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderdetail to aggregate.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderdetails
    **/
    _count?: true | OrderdetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderdetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderdetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderdetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderdetailMaxAggregateInputType
  }

  export type GetOrderdetailAggregateType<T extends OrderdetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderdetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderdetail[P]>
      : GetScalarType<T[P], AggregateOrderdetail[P]>
  }




  export type orderdetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderdetailWhereInput
    orderBy?: orderdetailOrderByWithAggregationInput | orderdetailOrderByWithAggregationInput[]
    by: OrderdetailScalarFieldEnum[] | OrderdetailScalarFieldEnum
    having?: orderdetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderdetailCountAggregateInputType | true
    _avg?: OrderdetailAvgAggregateInputType
    _sum?: OrderdetailSumAggregateInputType
    _min?: OrderdetailMinAggregateInputType
    _max?: OrderdetailMaxAggregateInputType
  }

  export type OrderdetailGroupByOutputType = {
    OrderDetailID: number
    OrderID: number
    ProductID: number
    Quantity: number
    Price: number
    _count: OrderdetailCountAggregateOutputType | null
    _avg: OrderdetailAvgAggregateOutputType | null
    _sum: OrderdetailSumAggregateOutputType | null
    _min: OrderdetailMinAggregateOutputType | null
    _max: OrderdetailMaxAggregateOutputType | null
  }

  type GetOrderdetailGroupByPayload<T extends orderdetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderdetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderdetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderdetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderdetailGroupByOutputType[P]>
        }
      >
    >


  export type orderdetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderDetailID?: boolean
    OrderID?: boolean
    ProductID?: boolean
    Quantity?: boolean
    Price?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderdetail"]>



  export type orderdetailSelectScalar = {
    OrderDetailID?: boolean
    OrderID?: boolean
    ProductID?: boolean
    Quantity?: boolean
    Price?: boolean
  }

  export type orderdetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderDetailID" | "OrderID" | "ProductID" | "Quantity" | "Price", ExtArgs["result"]["orderdetail"]>
  export type orderdetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $orderdetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderdetail"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderDetailID: number
      OrderID: number
      ProductID: number
      Quantity: number
      Price: number
    }, ExtArgs["result"]["orderdetail"]>
    composites: {}
  }

  type orderdetailGetPayload<S extends boolean | null | undefined | orderdetailDefaultArgs> = $Result.GetResult<Prisma.$orderdetailPayload, S>

  type orderdetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderdetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderdetailCountAggregateInputType | true
    }

  export interface orderdetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderdetail'], meta: { name: 'orderdetail' } }
    /**
     * Find zero or one Orderdetail that matches the filter.
     * @param {orderdetailFindUniqueArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderdetailFindUniqueArgs>(args: SelectSubset<T, orderdetailFindUniqueArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderdetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderdetailFindUniqueOrThrowArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderdetailFindUniqueOrThrowArgs>(args: SelectSubset<T, orderdetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailFindFirstArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderdetailFindFirstArgs>(args?: SelectSubset<T, orderdetailFindFirstArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderdetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailFindFirstOrThrowArgs} args - Arguments to find a Orderdetail
     * @example
     * // Get one Orderdetail
     * const orderdetail = await prisma.orderdetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderdetailFindFirstOrThrowArgs>(args?: SelectSubset<T, orderdetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderdetails
     * const orderdetails = await prisma.orderdetail.findMany()
     * 
     * // Get first 10 Orderdetails
     * const orderdetails = await prisma.orderdetail.findMany({ take: 10 })
     * 
     * // Only select the `OrderDetailID`
     * const orderdetailWithOrderDetailIDOnly = await prisma.orderdetail.findMany({ select: { OrderDetailID: true } })
     * 
     */
    findMany<T extends orderdetailFindManyArgs>(args?: SelectSubset<T, orderdetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderdetail.
     * @param {orderdetailCreateArgs} args - Arguments to create a Orderdetail.
     * @example
     * // Create one Orderdetail
     * const Orderdetail = await prisma.orderdetail.create({
     *   data: {
     *     // ... data to create a Orderdetail
     *   }
     * })
     * 
     */
    create<T extends orderdetailCreateArgs>(args: SelectSubset<T, orderdetailCreateArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderdetails.
     * @param {orderdetailCreateManyArgs} args - Arguments to create many Orderdetails.
     * @example
     * // Create many Orderdetails
     * const orderdetail = await prisma.orderdetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderdetailCreateManyArgs>(args?: SelectSubset<T, orderdetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orderdetail.
     * @param {orderdetailDeleteArgs} args - Arguments to delete one Orderdetail.
     * @example
     * // Delete one Orderdetail
     * const Orderdetail = await prisma.orderdetail.delete({
     *   where: {
     *     // ... filter to delete one Orderdetail
     *   }
     * })
     * 
     */
    delete<T extends orderdetailDeleteArgs>(args: SelectSubset<T, orderdetailDeleteArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderdetail.
     * @param {orderdetailUpdateArgs} args - Arguments to update one Orderdetail.
     * @example
     * // Update one Orderdetail
     * const orderdetail = await prisma.orderdetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderdetailUpdateArgs>(args: SelectSubset<T, orderdetailUpdateArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderdetails.
     * @param {orderdetailDeleteManyArgs} args - Arguments to filter Orderdetails to delete.
     * @example
     * // Delete a few Orderdetails
     * const { count } = await prisma.orderdetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderdetailDeleteManyArgs>(args?: SelectSubset<T, orderdetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderdetails
     * const orderdetail = await prisma.orderdetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderdetailUpdateManyArgs>(args: SelectSubset<T, orderdetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orderdetail.
     * @param {orderdetailUpsertArgs} args - Arguments to update or create a Orderdetail.
     * @example
     * // Update or create a Orderdetail
     * const orderdetail = await prisma.orderdetail.upsert({
     *   create: {
     *     // ... data to create a Orderdetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderdetail we want to update
     *   }
     * })
     */
    upsert<T extends orderdetailUpsertArgs>(args: SelectSubset<T, orderdetailUpsertArgs<ExtArgs>>): Prisma__orderdetailClient<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailCountArgs} args - Arguments to filter Orderdetails to count.
     * @example
     * // Count the number of Orderdetails
     * const count = await prisma.orderdetail.count({
     *   where: {
     *     // ... the filter for the Orderdetails we want to count
     *   }
     * })
    **/
    count<T extends orderdetailCountArgs>(
      args?: Subset<T, orderdetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderdetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderdetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderdetailAggregateArgs>(args: Subset<T, OrderdetailAggregateArgs>): Prisma.PrismaPromise<GetOrderdetailAggregateType<T>>

    /**
     * Group by Orderdetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderdetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderdetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderdetailGroupByArgs['orderBy'] }
        : { orderBy?: orderdetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderdetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderdetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderdetail model
   */
  readonly fields: orderdetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderdetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderdetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderdetail model
   */
  interface orderdetailFieldRefs {
    readonly OrderDetailID: FieldRef<"orderdetail", 'Int'>
    readonly OrderID: FieldRef<"orderdetail", 'Int'>
    readonly ProductID: FieldRef<"orderdetail", 'Int'>
    readonly Quantity: FieldRef<"orderdetail", 'Int'>
    readonly Price: FieldRef<"orderdetail", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * orderdetail findUnique
   */
  export type orderdetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail findUniqueOrThrow
   */
  export type orderdetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail findFirst
   */
  export type orderdetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderdetails.
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderdetails.
     */
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * orderdetail findFirstOrThrow
   */
  export type orderdetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetail to fetch.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderdetails.
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderdetails.
     */
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * orderdetail findMany
   */
  export type orderdetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter, which orderdetails to fetch.
     */
    where?: orderdetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderdetails to fetch.
     */
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderdetails.
     */
    cursor?: orderdetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderdetails.
     */
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * orderdetail create
   */
  export type orderdetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * The data needed to create a orderdetail.
     */
    data: XOR<orderdetailCreateInput, orderdetailUncheckedCreateInput>
  }

  /**
   * orderdetail createMany
   */
  export type orderdetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderdetails.
     */
    data: orderdetailCreateManyInput | orderdetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderdetail update
   */
  export type orderdetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * The data needed to update a orderdetail.
     */
    data: XOR<orderdetailUpdateInput, orderdetailUncheckedUpdateInput>
    /**
     * Choose, which orderdetail to update.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail updateMany
   */
  export type orderdetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderdetails.
     */
    data: XOR<orderdetailUpdateManyMutationInput, orderdetailUncheckedUpdateManyInput>
    /**
     * Filter which orderdetails to update
     */
    where?: orderdetailWhereInput
    /**
     * Limit how many orderdetails to update.
     */
    limit?: number
  }

  /**
   * orderdetail upsert
   */
  export type orderdetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * The filter to search for the orderdetail to update in case it exists.
     */
    where: orderdetailWhereUniqueInput
    /**
     * In case the orderdetail found by the `where` argument doesn't exist, create a new orderdetail with this data.
     */
    create: XOR<orderdetailCreateInput, orderdetailUncheckedCreateInput>
    /**
     * In case the orderdetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderdetailUpdateInput, orderdetailUncheckedUpdateInput>
  }

  /**
   * orderdetail delete
   */
  export type orderdetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    /**
     * Filter which orderdetail to delete.
     */
    where: orderdetailWhereUniqueInput
  }

  /**
   * orderdetail deleteMany
   */
  export type orderdetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderdetails to delete
     */
    where?: orderdetailWhereInput
    /**
     * Limit how many orderdetails to delete.
     */
    limit?: number
  }

  /**
   * orderdetail without action
   */
  export type orderdetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    ProductID: number | null
    UnitPrice: number | null
    CategoryID: number | null
    SupplierID: number | null
  }

  export type ProductSumAggregateOutputType = {
    ProductID: number | null
    UnitPrice: number | null
    CategoryID: number | null
    SupplierID: number | null
  }

  export type ProductMinAggregateOutputType = {
    ProductID: number | null
    ProductName: string | null
    ProductImage: string | null
    UnitPrice: number | null
    CategoryID: number | null
    SupplierID: number | null
  }

  export type ProductMaxAggregateOutputType = {
    ProductID: number | null
    ProductName: string | null
    ProductImage: string | null
    UnitPrice: number | null
    CategoryID: number | null
    SupplierID: number | null
  }

  export type ProductCountAggregateOutputType = {
    ProductID: number
    ProductName: number
    ProductImage: number
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    ProductID?: true
    UnitPrice?: true
    CategoryID?: true
    SupplierID?: true
  }

  export type ProductSumAggregateInputType = {
    ProductID?: true
    UnitPrice?: true
    CategoryID?: true
    SupplierID?: true
  }

  export type ProductMinAggregateInputType = {
    ProductID?: true
    ProductName?: true
    ProductImage?: true
    UnitPrice?: true
    CategoryID?: true
    SupplierID?: true
  }

  export type ProductMaxAggregateInputType = {
    ProductID?: true
    ProductName?: true
    ProductImage?: true
    UnitPrice?: true
    CategoryID?: true
    SupplierID?: true
  }

  export type ProductCountAggregateInputType = {
    ProductID?: true
    ProductName?: true
    ProductImage?: true
    UnitPrice?: true
    CategoryID?: true
    SupplierID?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    ProductID: number
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductID?: boolean
    ProductName?: boolean
    ProductImage?: boolean
    UnitPrice?: boolean
    CategoryID?: boolean
    SupplierID?: boolean
    orderdetail?: boolean | product$orderdetailArgs<ExtArgs>
    stock?: boolean | product$stockArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type productSelectScalar = {
    ProductID?: boolean
    ProductName?: boolean
    ProductImage?: boolean
    UnitPrice?: boolean
    CategoryID?: boolean
    SupplierID?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProductID" | "ProductName" | "ProductImage" | "UnitPrice" | "CategoryID" | "SupplierID", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | product$orderdetailArgs<ExtArgs>
    stock?: boolean | product$stockArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      orderdetail: Prisma.$orderdetailPayload<ExtArgs>[]
      stock: Prisma.$stockPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ProductID: number
      ProductName: string
      ProductImage: string
      UnitPrice: number
      CategoryID: number
      SupplierID: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `ProductID`
     * const productWithProductIDOnly = await prisma.product.findMany({ select: { ProductID: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderdetail<T extends product$orderdetailArgs<ExtArgs> = {}>(args?: Subset<T, product$orderdetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderdetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock<T extends product$stockArgs<ExtArgs> = {}>(args?: Subset<T, product$stockArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly ProductID: FieldRef<"product", 'Int'>
    readonly ProductName: FieldRef<"product", 'String'>
    readonly ProductImage: FieldRef<"product", 'String'>
    readonly UnitPrice: FieldRef<"product", 'Float'>
    readonly CategoryID: FieldRef<"product", 'Int'>
    readonly SupplierID: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.orderdetail
   */
  export type product$orderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderdetail
     */
    select?: orderdetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderdetail
     */
    omit?: orderdetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderdetailInclude<ExtArgs> | null
    where?: orderdetailWhereInput
    orderBy?: orderdetailOrderByWithRelationInput | orderdetailOrderByWithRelationInput[]
    cursor?: orderdetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderdetailScalarFieldEnum | OrderdetailScalarFieldEnum[]
  }

  /**
   * product.stock
   */
  export type product$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    where?: stockWhereInput
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    ProductID: number | null
    QuantityInStock: number | null
  }

  export type StockSumAggregateOutputType = {
    ProductID: number | null
    QuantityInStock: number | null
  }

  export type StockMinAggregateOutputType = {
    ProductID: number | null
    QuantityInStock: number | null
  }

  export type StockMaxAggregateOutputType = {
    ProductID: number | null
    QuantityInStock: number | null
  }

  export type StockCountAggregateOutputType = {
    ProductID: number
    QuantityInStock: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    ProductID?: true
    QuantityInStock?: true
  }

  export type StockSumAggregateInputType = {
    ProductID?: true
    QuantityInStock?: true
  }

  export type StockMinAggregateInputType = {
    ProductID?: true
    QuantityInStock?: true
  }

  export type StockMaxAggregateInputType = {
    ProductID?: true
    QuantityInStock?: true
  }

  export type StockCountAggregateInputType = {
    ProductID?: true
    QuantityInStock?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock to aggregate.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput
    orderBy?: stockOrderByWithAggregationInput | stockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    ProductID: number
    QuantityInStock: number
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProductID?: boolean
    QuantityInStock?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>



  export type stockSelectScalar = {
    ProductID?: boolean
    QuantityInStock?: boolean
  }

  export type stockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProductID" | "QuantityInStock", ExtArgs["result"]["stock"]>
  export type stockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ProductID: number
      QuantityInStock: number
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type stockGetPayload<S extends boolean | null | undefined | stockDefaultArgs> = $Result.GetResult<Prisma.$stockPayload, S>

  type stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock'], meta: { name: 'stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {stockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stockFindUniqueArgs>(args: SelectSubset<T, stockFindUniqueArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stockFindUniqueOrThrowArgs>(args: SelectSubset<T, stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stockFindFirstArgs>(args?: SelectSubset<T, stockFindFirstArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stockFindFirstOrThrowArgs>(args?: SelectSubset<T, stockFindFirstOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `ProductID`
     * const stockWithProductIDOnly = await prisma.stock.findMany({ select: { ProductID: true } })
     * 
     */
    findMany<T extends stockFindManyArgs>(args?: SelectSubset<T, stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {stockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends stockCreateArgs>(args: SelectSubset<T, stockCreateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {stockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stockCreateManyArgs>(args?: SelectSubset<T, stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stock.
     * @param {stockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends stockDeleteArgs>(args: SelectSubset<T, stockDeleteArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {stockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stockUpdateArgs>(args: SelectSubset<T, stockUpdateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stockDeleteManyArgs>(args?: SelectSubset<T, stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stockUpdateManyArgs>(args: SelectSubset<T, stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stock.
     * @param {stockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends stockUpsertArgs>(args: SelectSubset<T, stockUpsertArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stockCountArgs>(
      args?: Subset<T, stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stockGroupByArgs['orderBy'] }
        : { orderBy?: stockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock model
   */
  readonly fields: stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock model
   */
  interface stockFieldRefs {
    readonly ProductID: FieldRef<"stock", 'Int'>
    readonly QuantityInStock: FieldRef<"stock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stock findUnique
   */
  export type stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findUniqueOrThrow
   */
  export type stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findFirst
   */
  export type stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findFirstOrThrow
   */
  export type stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findMany
   */
  export type stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock create
   */
  export type stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to create a stock.
     */
    data: XOR<stockCreateInput, stockUncheckedCreateInput>
  }

  /**
   * stock createMany
   */
  export type stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock update
   */
  export type stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to update a stock.
     */
    data: XOR<stockUpdateInput, stockUncheckedUpdateInput>
    /**
     * Choose, which stock to update.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock updateMany
   */
  export type stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stock upsert
   */
  export type stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The filter to search for the stock to update in case it exists.
     */
    where: stockWhereUniqueInput
    /**
     * In case the stock found by the `where` argument doesn't exist, create a new stock with this data.
     */
    create: XOR<stockCreateInput, stockUncheckedCreateInput>
    /**
     * In case the stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stockUpdateInput, stockUncheckedUpdateInput>
  }

  /**
   * stock delete
   */
  export type stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter which stock to delete.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock deleteMany
   */
  export type stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to delete.
     */
    limit?: number
  }

  /**
   * stock without action
   */
  export type stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    OrderID: 'OrderID',
    OrderDate: 'OrderDate',
    CustomerID: 'CustomerID'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderdetailScalarFieldEnum: {
    OrderDetailID: 'OrderDetailID',
    OrderID: 'OrderID',
    ProductID: 'ProductID',
    Quantity: 'Quantity',
    Price: 'Price'
  };

  export type OrderdetailScalarFieldEnum = (typeof OrderdetailScalarFieldEnum)[keyof typeof OrderdetailScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    ProductID: 'ProductID',
    ProductName: 'ProductName',
    ProductImage: 'ProductImage',
    UnitPrice: 'UnitPrice',
    CategoryID: 'CategoryID',
    SupplierID: 'SupplierID'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const StockScalarFieldEnum: {
    ProductID: 'ProductID',
    QuantityInStock: 'QuantityInStock'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const productOrderByRelevanceFieldEnum: {
    ProductName: 'ProductName',
    ProductImage: 'ProductImage'
  };

  export type productOrderByRelevanceFieldEnum = (typeof productOrderByRelevanceFieldEnum)[keyof typeof productOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    
  /**
   * Deep Input Types
   */


  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    OrderID?: IntFilter<"order"> | number
    OrderDate?: DateTimeFilter<"order"> | Date | string
    CustomerID?: IntNullableFilter<"order"> | number | null
    orderdetail?: OrderdetailListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    OrderID?: SortOrder
    OrderDate?: SortOrder
    CustomerID?: SortOrderInput | SortOrder
    orderdetail?: orderdetailOrderByRelationAggregateInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    OrderID?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    OrderDate?: DateTimeFilter<"order"> | Date | string
    CustomerID?: IntNullableFilter<"order"> | number | null
    orderdetail?: OrderdetailListRelationFilter
  }, "OrderID">

  export type orderOrderByWithAggregationInput = {
    OrderID?: SortOrder
    OrderDate?: SortOrder
    CustomerID?: SortOrderInput | SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OrderID?: IntWithAggregatesFilter<"order"> | number
    OrderDate?: DateTimeWithAggregatesFilter<"order"> | Date | string
    CustomerID?: IntNullableWithAggregatesFilter<"order"> | number | null
  }

  export type orderdetailWhereInput = {
    AND?: orderdetailWhereInput | orderdetailWhereInput[]
    OR?: orderdetailWhereInput[]
    NOT?: orderdetailWhereInput | orderdetailWhereInput[]
    OrderDetailID?: IntFilter<"orderdetail"> | number
    OrderID?: IntFilter<"orderdetail"> | number
    ProductID?: IntFilter<"orderdetail"> | number
    Quantity?: IntFilter<"orderdetail"> | number
    Price?: FloatFilter<"orderdetail"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type orderdetailOrderByWithRelationInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
    order?: orderOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type orderdetailWhereUniqueInput = Prisma.AtLeast<{
    OrderDetailID?: number
    AND?: orderdetailWhereInput | orderdetailWhereInput[]
    OR?: orderdetailWhereInput[]
    NOT?: orderdetailWhereInput | orderdetailWhereInput[]
    OrderID?: IntFilter<"orderdetail"> | number
    ProductID?: IntFilter<"orderdetail"> | number
    Quantity?: IntFilter<"orderdetail"> | number
    Price?: FloatFilter<"orderdetail"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "OrderDetailID">

  export type orderdetailOrderByWithAggregationInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
    _count?: orderdetailCountOrderByAggregateInput
    _avg?: orderdetailAvgOrderByAggregateInput
    _max?: orderdetailMaxOrderByAggregateInput
    _min?: orderdetailMinOrderByAggregateInput
    _sum?: orderdetailSumOrderByAggregateInput
  }

  export type orderdetailScalarWhereWithAggregatesInput = {
    AND?: orderdetailScalarWhereWithAggregatesInput | orderdetailScalarWhereWithAggregatesInput[]
    OR?: orderdetailScalarWhereWithAggregatesInput[]
    NOT?: orderdetailScalarWhereWithAggregatesInput | orderdetailScalarWhereWithAggregatesInput[]
    OrderDetailID?: IntWithAggregatesFilter<"orderdetail"> | number
    OrderID?: IntWithAggregatesFilter<"orderdetail"> | number
    ProductID?: IntWithAggregatesFilter<"orderdetail"> | number
    Quantity?: IntWithAggregatesFilter<"orderdetail"> | number
    Price?: FloatWithAggregatesFilter<"orderdetail"> | number
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    ProductID?: IntFilter<"product"> | number
    ProductName?: StringFilter<"product"> | string
    ProductImage?: StringFilter<"product"> | string
    UnitPrice?: FloatFilter<"product"> | number
    CategoryID?: IntFilter<"product"> | number
    SupplierID?: IntFilter<"product"> | number
    orderdetail?: OrderdetailListRelationFilter
    stock?: XOR<StockNullableScalarRelationFilter, stockWhereInput> | null
  }

  export type productOrderByWithRelationInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    ProductImage?: SortOrder
    UnitPrice?: SortOrder
    CategoryID?: SortOrder
    SupplierID?: SortOrder
    orderdetail?: orderdetailOrderByRelationAggregateInput
    stock?: stockOrderByWithRelationInput
    _relevance?: productOrderByRelevanceInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    ProductID?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    ProductName?: StringFilter<"product"> | string
    ProductImage?: StringFilter<"product"> | string
    UnitPrice?: FloatFilter<"product"> | number
    CategoryID?: IntFilter<"product"> | number
    SupplierID?: IntFilter<"product"> | number
    orderdetail?: OrderdetailListRelationFilter
    stock?: XOR<StockNullableScalarRelationFilter, stockWhereInput> | null
  }, "ProductID">

  export type productOrderByWithAggregationInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    ProductImage?: SortOrder
    UnitPrice?: SortOrder
    CategoryID?: SortOrder
    SupplierID?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    ProductID?: IntWithAggregatesFilter<"product"> | number
    ProductName?: StringWithAggregatesFilter<"product"> | string
    ProductImage?: StringWithAggregatesFilter<"product"> | string
    UnitPrice?: FloatWithAggregatesFilter<"product"> | number
    CategoryID?: IntWithAggregatesFilter<"product"> | number
    SupplierID?: IntWithAggregatesFilter<"product"> | number
  }

  export type stockWhereInput = {
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    ProductID?: IntFilter<"stock"> | number
    QuantityInStock?: IntFilter<"stock"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type stockOrderByWithRelationInput = {
    ProductID?: SortOrder
    QuantityInStock?: SortOrder
    product?: productOrderByWithRelationInput
  }

  export type stockWhereUniqueInput = Prisma.AtLeast<{
    ProductID?: number
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    QuantityInStock?: IntFilter<"stock"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "ProductID">

  export type stockOrderByWithAggregationInput = {
    ProductID?: SortOrder
    QuantityInStock?: SortOrder
    _count?: stockCountOrderByAggregateInput
    _avg?: stockAvgOrderByAggregateInput
    _max?: stockMaxOrderByAggregateInput
    _min?: stockMinOrderByAggregateInput
    _sum?: stockSumOrderByAggregateInput
  }

  export type stockScalarWhereWithAggregatesInput = {
    AND?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    OR?: stockScalarWhereWithAggregatesInput[]
    NOT?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    ProductID?: IntWithAggregatesFilter<"stock"> | number
    QuantityInStock?: IntWithAggregatesFilter<"stock"> | number
  }

  export type orderCreateInput = {
    OrderDate: Date | string
    CustomerID?: number | null
    orderdetail?: orderdetailCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    OrderID?: number
    OrderDate: Date | string
    CustomerID?: number | null
    orderdetail?: orderdetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    OrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
    orderdetail?: orderdetailUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    OrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
    orderdetail?: orderdetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    OrderID?: number
    OrderDate: Date | string
    CustomerID?: number | null
  }

  export type orderUpdateManyMutationInput = {
    OrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderUncheckedUpdateManyInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    OrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderdetailCreateInput = {
    Quantity: number
    Price: number
    order: orderCreateNestedOneWithoutOrderdetailInput
    product: productCreateNestedOneWithoutOrderdetailInput
  }

  export type orderdetailUncheckedCreateInput = {
    OrderDetailID?: number
    OrderID: number
    ProductID: number
    Quantity: number
    Price: number
  }

  export type orderdetailUpdateInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrderdetailNestedInput
    product?: productUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type orderdetailUncheckedUpdateInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    OrderID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailCreateManyInput = {
    OrderDetailID?: number
    OrderID: number
    ProductID: number
    Quantity: number
    Price: number
  }

  export type orderdetailUpdateManyMutationInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailUncheckedUpdateManyInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    OrderID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type productCreateInput = {
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    orderdetail?: orderdetailCreateNestedManyWithoutProductInput
    stock?: stockCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    ProductID?: number
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    orderdetail?: orderdetailUncheckedCreateNestedManyWithoutProductInput
    stock?: stockUncheckedCreateNestedOneWithoutProductInput
  }

  export type productUpdateInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
    orderdetail?: orderdetailUpdateManyWithoutProductNestedInput
    stock?: stockUpdateOneWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
    orderdetail?: orderdetailUncheckedUpdateManyWithoutProductNestedInput
    stock?: stockUncheckedUpdateOneWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    ProductID?: number
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
  }

  export type productUpdateManyMutationInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
  }

  export type productUncheckedUpdateManyInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
  }

  export type stockCreateInput = {
    QuantityInStock: number
    product: productCreateNestedOneWithoutStockInput
  }

  export type stockUncheckedCreateInput = {
    ProductID: number
    QuantityInStock: number
  }

  export type stockUpdateInput = {
    QuantityInStock?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutStockNestedInput
  }

  export type stockUncheckedUpdateInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    QuantityInStock?: IntFieldUpdateOperationsInput | number
  }

  export type stockCreateManyInput = {
    ProductID: number
    QuantityInStock: number
  }

  export type stockUpdateManyMutationInput = {
    QuantityInStock?: IntFieldUpdateOperationsInput | number
  }

  export type stockUncheckedUpdateManyInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    QuantityInStock?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrderdetailListRelationFilter = {
    every?: orderdetailWhereInput
    some?: orderdetailWhereInput
    none?: orderdetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type orderdetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderCountOrderByAggregateInput = {
    OrderID?: SortOrder
    OrderDate?: SortOrder
    CustomerID?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    OrderID?: SortOrder
    OrderDate?: SortOrder
    CustomerID?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    OrderID?: SortOrder
    OrderDate?: SortOrder
    CustomerID?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    OrderID?: SortOrder
    CustomerID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type orderdetailCountOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
  }

  export type orderdetailAvgOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
  }

  export type orderdetailMaxOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
  }

  export type orderdetailMinOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
  }

  export type orderdetailSumOrderByAggregateInput = {
    OrderDetailID?: SortOrder
    OrderID?: SortOrder
    ProductID?: SortOrder
    Quantity?: SortOrder
    Price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StockNullableScalarRelationFilter = {
    is?: stockWhereInput | null
    isNot?: stockWhereInput | null
  }

  export type productOrderByRelevanceInput = {
    fields: productOrderByRelevanceFieldEnum | productOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productCountOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    ProductImage?: SortOrder
    UnitPrice?: SortOrder
    CategoryID?: SortOrder
    SupplierID?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    CategoryID?: SortOrder
    SupplierID?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    ProductImage?: SortOrder
    UnitPrice?: SortOrder
    CategoryID?: SortOrder
    SupplierID?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    ProductID?: SortOrder
    ProductName?: SortOrder
    ProductImage?: SortOrder
    UnitPrice?: SortOrder
    CategoryID?: SortOrder
    SupplierID?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    ProductID?: SortOrder
    UnitPrice?: SortOrder
    CategoryID?: SortOrder
    SupplierID?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type stockCountOrderByAggregateInput = {
    ProductID?: SortOrder
    QuantityInStock?: SortOrder
  }

  export type stockAvgOrderByAggregateInput = {
    ProductID?: SortOrder
    QuantityInStock?: SortOrder
  }

  export type stockMaxOrderByAggregateInput = {
    ProductID?: SortOrder
    QuantityInStock?: SortOrder
  }

  export type stockMinOrderByAggregateInput = {
    ProductID?: SortOrder
    QuantityInStock?: SortOrder
  }

  export type stockSumOrderByAggregateInput = {
    ProductID?: SortOrder
    QuantityInStock?: SortOrder
  }

  export type orderdetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type orderdetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderdetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutOrderInput | orderdetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutOrderInput | orderdetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutOrderInput | orderdetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderdetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput> | orderdetailCreateWithoutOrderInput[] | orderdetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutOrderInput | orderdetailCreateOrConnectWithoutOrderInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutOrderInput | orderdetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderdetailCreateManyOrderInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutOrderInput | orderdetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutOrderInput | orderdetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type orderCreateNestedOneWithoutOrderdetailInput = {
    create?: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrderdetailInput
    connect?: orderWhereUniqueInput
  }

  export type productCreateNestedOneWithoutOrderdetailInput = {
    create?: XOR<productCreateWithoutOrderdetailInput, productUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderdetailInput
    connect?: productWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderUpdateOneRequiredWithoutOrderdetailNestedInput = {
    create?: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrderdetailInput
    upsert?: orderUpsertWithoutOrderdetailInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrderdetailInput, orderUpdateWithoutOrderdetailInput>, orderUncheckedUpdateWithoutOrderdetailInput>
  }

  export type productUpdateOneRequiredWithoutOrderdetailNestedInput = {
    create?: XOR<productCreateWithoutOrderdetailInput, productUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderdetailInput
    upsert?: productUpsertWithoutOrderdetailInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrderdetailInput, productUpdateWithoutOrderdetailInput>, productUncheckedUpdateWithoutOrderdetailInput>
  }

  export type orderdetailCreateNestedManyWithoutProductInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type stockCreateNestedOneWithoutProductInput = {
    create?: XOR<stockCreateWithoutProductInput, stockUncheckedCreateWithoutProductInput>
    connectOrCreate?: stockCreateOrConnectWithoutProductInput
    connect?: stockWhereUniqueInput
  }

  export type orderdetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
  }

  export type stockUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<stockCreateWithoutProductInput, stockUncheckedCreateWithoutProductInput>
    connectOrCreate?: stockCreateOrConnectWithoutProductInput
    connect?: stockWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type orderdetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutProductInput | orderdetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutProductInput | orderdetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutProductInput | orderdetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type stockUpdateOneWithoutProductNestedInput = {
    create?: XOR<stockCreateWithoutProductInput, stockUncheckedCreateWithoutProductInput>
    connectOrCreate?: stockCreateOrConnectWithoutProductInput
    upsert?: stockUpsertWithoutProductInput
    disconnect?: stockWhereInput | boolean
    delete?: stockWhereInput | boolean
    connect?: stockWhereUniqueInput
    update?: XOR<XOR<stockUpdateToOneWithWhereWithoutProductInput, stockUpdateWithoutProductInput>, stockUncheckedUpdateWithoutProductInput>
  }

  export type orderdetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput> | orderdetailCreateWithoutProductInput[] | orderdetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderdetailCreateOrConnectWithoutProductInput | orderdetailCreateOrConnectWithoutProductInput[]
    upsert?: orderdetailUpsertWithWhereUniqueWithoutProductInput | orderdetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderdetailCreateManyProductInputEnvelope
    set?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    disconnect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    delete?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    connect?: orderdetailWhereUniqueInput | orderdetailWhereUniqueInput[]
    update?: orderdetailUpdateWithWhereUniqueWithoutProductInput | orderdetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderdetailUpdateManyWithWhereWithoutProductInput | orderdetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
  }

  export type stockUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<stockCreateWithoutProductInput, stockUncheckedCreateWithoutProductInput>
    connectOrCreate?: stockCreateOrConnectWithoutProductInput
    upsert?: stockUpsertWithoutProductInput
    disconnect?: stockWhereInput | boolean
    delete?: stockWhereInput | boolean
    connect?: stockWhereUniqueInput
    update?: XOR<XOR<stockUpdateToOneWithWhereWithoutProductInput, stockUpdateWithoutProductInput>, stockUncheckedUpdateWithoutProductInput>
  }

  export type productCreateNestedOneWithoutStockInput = {
    create?: XOR<productCreateWithoutStockInput, productUncheckedCreateWithoutStockInput>
    connectOrCreate?: productCreateOrConnectWithoutStockInput
    connect?: productWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<productCreateWithoutStockInput, productUncheckedCreateWithoutStockInput>
    connectOrCreate?: productCreateOrConnectWithoutStockInput
    upsert?: productUpsertWithoutStockInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutStockInput, productUpdateWithoutStockInput>, productUncheckedUpdateWithoutStockInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type orderdetailCreateWithoutOrderInput = {
    Quantity: number
    Price: number
    product: productCreateNestedOneWithoutOrderdetailInput
  }

  export type orderdetailUncheckedCreateWithoutOrderInput = {
    OrderDetailID?: number
    ProductID: number
    Quantity: number
    Price: number
  }

  export type orderdetailCreateOrConnectWithoutOrderInput = {
    where: orderdetailWhereUniqueInput
    create: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput>
  }

  export type orderdetailCreateManyOrderInputEnvelope = {
    data: orderdetailCreateManyOrderInput | orderdetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type orderdetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: orderdetailWhereUniqueInput
    update: XOR<orderdetailUpdateWithoutOrderInput, orderdetailUncheckedUpdateWithoutOrderInput>
    create: XOR<orderdetailCreateWithoutOrderInput, orderdetailUncheckedCreateWithoutOrderInput>
  }

  export type orderdetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: orderdetailWhereUniqueInput
    data: XOR<orderdetailUpdateWithoutOrderInput, orderdetailUncheckedUpdateWithoutOrderInput>
  }

  export type orderdetailUpdateManyWithWhereWithoutOrderInput = {
    where: orderdetailScalarWhereInput
    data: XOR<orderdetailUpdateManyMutationInput, orderdetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderdetailScalarWhereInput = {
    AND?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
    OR?: orderdetailScalarWhereInput[]
    NOT?: orderdetailScalarWhereInput | orderdetailScalarWhereInput[]
    OrderDetailID?: IntFilter<"orderdetail"> | number
    OrderID?: IntFilter<"orderdetail"> | number
    ProductID?: IntFilter<"orderdetail"> | number
    Quantity?: IntFilter<"orderdetail"> | number
    Price?: FloatFilter<"orderdetail"> | number
  }

  export type orderCreateWithoutOrderdetailInput = {
    OrderDate: Date | string
    CustomerID?: number | null
  }

  export type orderUncheckedCreateWithoutOrderdetailInput = {
    OrderID?: number
    OrderDate: Date | string
    CustomerID?: number | null
  }

  export type orderCreateOrConnectWithoutOrderdetailInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
  }

  export type productCreateWithoutOrderdetailInput = {
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    stock?: stockCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrderdetailInput = {
    ProductID?: number
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    stock?: stockUncheckedCreateNestedOneWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrderdetailInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrderdetailInput, productUncheckedCreateWithoutOrderdetailInput>
  }

  export type orderUpsertWithoutOrderdetailInput = {
    update: XOR<orderUpdateWithoutOrderdetailInput, orderUncheckedUpdateWithoutOrderdetailInput>
    create: XOR<orderCreateWithoutOrderdetailInput, orderUncheckedCreateWithoutOrderdetailInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrderdetailInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrderdetailInput, orderUncheckedUpdateWithoutOrderdetailInput>
  }

  export type orderUpdateWithoutOrderdetailInput = {
    OrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderUncheckedUpdateWithoutOrderdetailInput = {
    OrderID?: IntFieldUpdateOperationsInput | number
    OrderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productUpsertWithoutOrderdetailInput = {
    update: XOR<productUpdateWithoutOrderdetailInput, productUncheckedUpdateWithoutOrderdetailInput>
    create: XOR<productCreateWithoutOrderdetailInput, productUncheckedCreateWithoutOrderdetailInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrderdetailInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrderdetailInput, productUncheckedUpdateWithoutOrderdetailInput>
  }

  export type productUpdateWithoutOrderdetailInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
    stock?: stockUpdateOneWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrderdetailInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
    stock?: stockUncheckedUpdateOneWithoutProductNestedInput
  }

  export type orderdetailCreateWithoutProductInput = {
    Quantity: number
    Price: number
    order: orderCreateNestedOneWithoutOrderdetailInput
  }

  export type orderdetailUncheckedCreateWithoutProductInput = {
    OrderDetailID?: number
    OrderID: number
    Quantity: number
    Price: number
  }

  export type orderdetailCreateOrConnectWithoutProductInput = {
    where: orderdetailWhereUniqueInput
    create: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput>
  }

  export type orderdetailCreateManyProductInputEnvelope = {
    data: orderdetailCreateManyProductInput | orderdetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type stockCreateWithoutProductInput = {
    QuantityInStock: number
  }

  export type stockUncheckedCreateWithoutProductInput = {
    QuantityInStock: number
  }

  export type stockCreateOrConnectWithoutProductInput = {
    where: stockWhereUniqueInput
    create: XOR<stockCreateWithoutProductInput, stockUncheckedCreateWithoutProductInput>
  }

  export type orderdetailUpsertWithWhereUniqueWithoutProductInput = {
    where: orderdetailWhereUniqueInput
    update: XOR<orderdetailUpdateWithoutProductInput, orderdetailUncheckedUpdateWithoutProductInput>
    create: XOR<orderdetailCreateWithoutProductInput, orderdetailUncheckedCreateWithoutProductInput>
  }

  export type orderdetailUpdateWithWhereUniqueWithoutProductInput = {
    where: orderdetailWhereUniqueInput
    data: XOR<orderdetailUpdateWithoutProductInput, orderdetailUncheckedUpdateWithoutProductInput>
  }

  export type orderdetailUpdateManyWithWhereWithoutProductInput = {
    where: orderdetailScalarWhereInput
    data: XOR<orderdetailUpdateManyMutationInput, orderdetailUncheckedUpdateManyWithoutProductInput>
  }

  export type stockUpsertWithoutProductInput = {
    update: XOR<stockUpdateWithoutProductInput, stockUncheckedUpdateWithoutProductInput>
    create: XOR<stockCreateWithoutProductInput, stockUncheckedCreateWithoutProductInput>
    where?: stockWhereInput
  }

  export type stockUpdateToOneWithWhereWithoutProductInput = {
    where?: stockWhereInput
    data: XOR<stockUpdateWithoutProductInput, stockUncheckedUpdateWithoutProductInput>
  }

  export type stockUpdateWithoutProductInput = {
    QuantityInStock?: IntFieldUpdateOperationsInput | number
  }

  export type stockUncheckedUpdateWithoutProductInput = {
    QuantityInStock?: IntFieldUpdateOperationsInput | number
  }

  export type productCreateWithoutStockInput = {
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    orderdetail?: orderdetailCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutStockInput = {
    ProductID?: number
    ProductName: string
    ProductImage: string
    UnitPrice: number
    CategoryID: number
    SupplierID: number
    orderdetail?: orderdetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutStockInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutStockInput, productUncheckedCreateWithoutStockInput>
  }

  export type productUpsertWithoutStockInput = {
    update: XOR<productUpdateWithoutStockInput, productUncheckedUpdateWithoutStockInput>
    create: XOR<productCreateWithoutStockInput, productUncheckedCreateWithoutStockInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutStockInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutStockInput, productUncheckedUpdateWithoutStockInput>
  }

  export type productUpdateWithoutStockInput = {
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
    orderdetail?: orderdetailUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutStockInput = {
    ProductID?: IntFieldUpdateOperationsInput | number
    ProductName?: StringFieldUpdateOperationsInput | string
    ProductImage?: StringFieldUpdateOperationsInput | string
    UnitPrice?: FloatFieldUpdateOperationsInput | number
    CategoryID?: IntFieldUpdateOperationsInput | number
    SupplierID?: IntFieldUpdateOperationsInput | number
    orderdetail?: orderdetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type orderdetailCreateManyOrderInput = {
    OrderDetailID?: number
    ProductID: number
    Quantity: number
    Price: number
  }

  export type orderdetailUpdateWithoutOrderInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type orderdetailUncheckedUpdateWithoutOrderInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailUncheckedUpdateManyWithoutOrderInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    ProductID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailCreateManyProductInput = {
    OrderDetailID?: number
    OrderID: number
    Quantity: number
    Price: number
  }

  export type orderdetailUpdateWithoutProductInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrderdetailNestedInput
  }

  export type orderdetailUncheckedUpdateWithoutProductInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    OrderID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type orderdetailUncheckedUpdateManyWithoutProductInput = {
    OrderDetailID?: IntFieldUpdateOperationsInput | number
    OrderID?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    Price?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}