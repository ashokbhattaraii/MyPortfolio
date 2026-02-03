
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
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostStats
 * 
 */
export type PostStats = $Result.DefaultSelection<Prisma.$PostStatsPayload>
/**
 * Model ProjectDetail
 * 
 */
export type ProjectDetail = $Result.DefaultSelection<Prisma.$ProjectDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
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
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.postStats`: Exposes CRUD operations for the **PostStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostStats
    * const postStats = await prisma.postStats.findMany()
    * ```
    */
  get postStats(): Prisma.PostStatsDelegate<ExtArgs>;

  /**
   * `prisma.projectDetail`: Exposes CRUD operations for the **ProjectDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDetails
    * const projectDetails = await prisma.projectDetail.findMany()
    * ```
    */
  get projectDetail(): Prisma.ProjectDetailDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Post: 'Post',
    PostStats: 'PostStats',
    ProjectDetail: 'ProjectDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "post" | "postStats" | "projectDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostStats: {
        payload: Prisma.$PostStatsPayload<ExtArgs>
        fields: Prisma.PostStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>
          }
          findFirst: {
            args: Prisma.PostStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>
          }
          findMany: {
            args: Prisma.PostStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>[]
          }
          create: {
            args: Prisma.PostStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>
          }
          createMany: {
            args: Prisma.PostStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>[]
          }
          delete: {
            args: Prisma.PostStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>
          }
          update: {
            args: Prisma.PostStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>
          }
          deleteMany: {
            args: Prisma.PostStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostStatsPayload>
          }
          aggregate: {
            args: Prisma.PostStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostStats>
          }
          groupBy: {
            args: Prisma.PostStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PostStatsCountAggregateOutputType> | number
          }
        }
      }
      ProjectDetail: {
        payload: Prisma.$ProjectDetailPayload<ExtArgs>
        fields: Prisma.ProjectDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          findFirst: {
            args: Prisma.ProjectDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          findMany: {
            args: Prisma.ProjectDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          create: {
            args: Prisma.ProjectDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          createMany: {
            args: Prisma.ProjectDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>[]
          }
          delete: {
            args: Prisma.ProjectDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          update: {
            args: Prisma.ProjectDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailPayload>
          }
          aggregate: {
            args: Prisma.ProjectDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDetail>
          }
          groupBy: {
            args: Prisma.ProjectDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    status: string | null
    sourceLink: string | null
    image: string | null
    author: string | null
    publishedAt: string | null
    updatedAt: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    status: string | null
    sourceLink: string | null
    image: string | null
    author: string | null
    publishedAt: string | null
    updatedAt: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    status: number
    sourceLink: number
    tags: number
    image: number
    author: number
    publishedAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    status?: true
    sourceLink?: true
    image?: true
    author?: true
    publishedAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    status?: true
    sourceLink?: true
    image?: true
    author?: true
    publishedAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    status?: true
    sourceLink?: true
    tags?: true
    image?: true
    author?: true
    publishedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    slug: string
    content: string
    status: string
    sourceLink: string
    tags: string[]
    image: string | null
    author: string | null
    publishedAt: string
    updatedAt: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    status?: boolean
    sourceLink?: boolean
    tags?: boolean
    image?: boolean
    author?: boolean
    publishedAt?: boolean
    updatedAt?: boolean
    PostStats?: boolean | Post$PostStatsArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    status?: boolean
    sourceLink?: boolean
    tags?: boolean
    image?: boolean
    author?: boolean
    publishedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    status?: boolean
    sourceLink?: boolean
    tags?: boolean
    image?: boolean
    author?: boolean
    publishedAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostStats?: boolean | Post$PostStatsArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      PostStats: Prisma.$PostStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      content: string
      status: string
      sourceLink: string
      tags: string[]
      image: string | null
      author: string | null
      publishedAt: string
      updatedAt: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PostStats<T extends Post$PostStatsArgs<ExtArgs> = {}>(args?: Subset<T, Post$PostStatsArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'String'>
    readonly sourceLink: FieldRef<"Post", 'String'>
    readonly tags: FieldRef<"Post", 'String[]'>
    readonly image: FieldRef<"Post", 'String'>
    readonly author: FieldRef<"Post", 'String'>
    readonly publishedAt: FieldRef<"Post", 'String'>
    readonly updatedAt: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }

  /**
   * Post.PostStats
   */
  export type Post$PostStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    where?: PostStatsWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostStats
   */

  export type AggregatePostStats = {
    _count: PostStatsCountAggregateOutputType | null
    _avg: PostStatsAvgAggregateOutputType | null
    _sum: PostStatsSumAggregateOutputType | null
    _min: PostStatsMinAggregateOutputType | null
    _max: PostStatsMaxAggregateOutputType | null
  }

  export type PostStatsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    views: number | null
    likes: number | null
    shares: number | null
    comments: number | null
  }

  export type PostStatsSumAggregateOutputType = {
    id: number | null
    postId: number | null
    views: number | null
    likes: number | null
    shares: number | null
    comments: number | null
  }

  export type PostStatsMinAggregateOutputType = {
    id: number | null
    postId: number | null
    views: number | null
    likes: number | null
    shares: number | null
    comments: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostStatsMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    views: number | null
    likes: number | null
    shares: number | null
    comments: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostStatsCountAggregateOutputType = {
    id: number
    postId: number
    views: number
    likes: number
    shares: number
    comments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostStatsAvgAggregateInputType = {
    id?: true
    postId?: true
    views?: true
    likes?: true
    shares?: true
    comments?: true
  }

  export type PostStatsSumAggregateInputType = {
    id?: true
    postId?: true
    views?: true
    likes?: true
    shares?: true
    comments?: true
  }

  export type PostStatsMinAggregateInputType = {
    id?: true
    postId?: true
    views?: true
    likes?: true
    shares?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostStatsMaxAggregateInputType = {
    id?: true
    postId?: true
    views?: true
    likes?: true
    shares?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostStatsCountAggregateInputType = {
    id?: true
    postId?: true
    views?: true
    likes?: true
    shares?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostStats to aggregate.
     */
    where?: PostStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostStats to fetch.
     */
    orderBy?: PostStatsOrderByWithRelationInput | PostStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostStats
    **/
    _count?: true | PostStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostStatsMaxAggregateInputType
  }

  export type GetPostStatsAggregateType<T extends PostStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostStats[P]>
      : GetScalarType<T[P], AggregatePostStats[P]>
  }




  export type PostStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostStatsWhereInput
    orderBy?: PostStatsOrderByWithAggregationInput | PostStatsOrderByWithAggregationInput[]
    by: PostStatsScalarFieldEnum[] | PostStatsScalarFieldEnum
    having?: PostStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostStatsCountAggregateInputType | true
    _avg?: PostStatsAvgAggregateInputType
    _sum?: PostStatsSumAggregateInputType
    _min?: PostStatsMinAggregateInputType
    _max?: PostStatsMaxAggregateInputType
  }

  export type PostStatsGroupByOutputType = {
    id: number
    postId: number
    views: number
    likes: number
    shares: number
    comments: number
    createdAt: Date
    updatedAt: Date
    _count: PostStatsCountAggregateOutputType | null
    _avg: PostStatsAvgAggregateOutputType | null
    _sum: PostStatsSumAggregateOutputType | null
    _min: PostStatsMinAggregateOutputType | null
    _max: PostStatsMaxAggregateOutputType | null
  }

  type GetPostStatsGroupByPayload<T extends PostStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PostStatsGroupByOutputType[P]>
        }
      >
    >


  export type PostStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    views?: boolean
    likes?: boolean
    shares?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postStats"]>

  export type PostStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    views?: boolean
    likes?: boolean
    shares?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postStats"]>

  export type PostStatsSelectScalar = {
    id?: boolean
    postId?: boolean
    views?: boolean
    likes?: boolean
    shares?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type PostStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostStats"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      views: number
      likes: number
      shares: number
      comments: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postStats"]>
    composites: {}
  }

  type PostStatsGetPayload<S extends boolean | null | undefined | PostStatsDefaultArgs> = $Result.GetResult<Prisma.$PostStatsPayload, S>

  type PostStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostStatsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostStatsCountAggregateInputType | true
    }

  export interface PostStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostStats'], meta: { name: 'PostStats' } }
    /**
     * Find zero or one PostStats that matches the filter.
     * @param {PostStatsFindUniqueArgs} args - Arguments to find a PostStats
     * @example
     * // Get one PostStats
     * const postStats = await prisma.postStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostStatsFindUniqueArgs>(args: SelectSubset<T, PostStatsFindUniqueArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostStats that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostStatsFindUniqueOrThrowArgs} args - Arguments to find a PostStats
     * @example
     * // Get one PostStats
     * const postStats = await prisma.postStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostStatsFindFirstArgs} args - Arguments to find a PostStats
     * @example
     * // Get one PostStats
     * const postStats = await prisma.postStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostStatsFindFirstArgs>(args?: SelectSubset<T, PostStatsFindFirstArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostStatsFindFirstOrThrowArgs} args - Arguments to find a PostStats
     * @example
     * // Get one PostStats
     * const postStats = await prisma.postStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostStats
     * const postStats = await prisma.postStats.findMany()
     * 
     * // Get first 10 PostStats
     * const postStats = await prisma.postStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postStatsWithIdOnly = await prisma.postStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostStatsFindManyArgs>(args?: SelectSubset<T, PostStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostStats.
     * @param {PostStatsCreateArgs} args - Arguments to create a PostStats.
     * @example
     * // Create one PostStats
     * const PostStats = await prisma.postStats.create({
     *   data: {
     *     // ... data to create a PostStats
     *   }
     * })
     * 
     */
    create<T extends PostStatsCreateArgs>(args: SelectSubset<T, PostStatsCreateArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostStats.
     * @param {PostStatsCreateManyArgs} args - Arguments to create many PostStats.
     * @example
     * // Create many PostStats
     * const postStats = await prisma.postStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostStatsCreateManyArgs>(args?: SelectSubset<T, PostStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostStats and returns the data saved in the database.
     * @param {PostStatsCreateManyAndReturnArgs} args - Arguments to create many PostStats.
     * @example
     * // Create many PostStats
     * const postStats = await prisma.postStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostStats and only return the `id`
     * const postStatsWithIdOnly = await prisma.postStats.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostStats.
     * @param {PostStatsDeleteArgs} args - Arguments to delete one PostStats.
     * @example
     * // Delete one PostStats
     * const PostStats = await prisma.postStats.delete({
     *   where: {
     *     // ... filter to delete one PostStats
     *   }
     * })
     * 
     */
    delete<T extends PostStatsDeleteArgs>(args: SelectSubset<T, PostStatsDeleteArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostStats.
     * @param {PostStatsUpdateArgs} args - Arguments to update one PostStats.
     * @example
     * // Update one PostStats
     * const postStats = await prisma.postStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostStatsUpdateArgs>(args: SelectSubset<T, PostStatsUpdateArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostStats.
     * @param {PostStatsDeleteManyArgs} args - Arguments to filter PostStats to delete.
     * @example
     * // Delete a few PostStats
     * const { count } = await prisma.postStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostStatsDeleteManyArgs>(args?: SelectSubset<T, PostStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostStats
     * const postStats = await prisma.postStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostStatsUpdateManyArgs>(args: SelectSubset<T, PostStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostStats.
     * @param {PostStatsUpsertArgs} args - Arguments to update or create a PostStats.
     * @example
     * // Update or create a PostStats
     * const postStats = await prisma.postStats.upsert({
     *   create: {
     *     // ... data to create a PostStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostStats we want to update
     *   }
     * })
     */
    upsert<T extends PostStatsUpsertArgs>(args: SelectSubset<T, PostStatsUpsertArgs<ExtArgs>>): Prisma__PostStatsClient<$Result.GetResult<Prisma.$PostStatsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostStatsCountArgs} args - Arguments to filter PostStats to count.
     * @example
     * // Count the number of PostStats
     * const count = await prisma.postStats.count({
     *   where: {
     *     // ... the filter for the PostStats we want to count
     *   }
     * })
    **/
    count<T extends PostStatsCountArgs>(
      args?: Subset<T, PostStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostStatsAggregateArgs>(args: Subset<T, PostStatsAggregateArgs>): Prisma.PrismaPromise<GetPostStatsAggregateType<T>>

    /**
     * Group by PostStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostStatsGroupByArgs} args - Group by arguments.
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
      T extends PostStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostStatsGroupByArgs['orderBy'] }
        : { orderBy?: PostStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostStats model
   */
  readonly fields: PostStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PostStats model
   */ 
  interface PostStatsFieldRefs {
    readonly id: FieldRef<"PostStats", 'Int'>
    readonly postId: FieldRef<"PostStats", 'Int'>
    readonly views: FieldRef<"PostStats", 'Int'>
    readonly likes: FieldRef<"PostStats", 'Int'>
    readonly shares: FieldRef<"PostStats", 'Int'>
    readonly comments: FieldRef<"PostStats", 'Int'>
    readonly createdAt: FieldRef<"PostStats", 'DateTime'>
    readonly updatedAt: FieldRef<"PostStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostStats findUnique
   */
  export type PostStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * Filter, which PostStats to fetch.
     */
    where: PostStatsWhereUniqueInput
  }

  /**
   * PostStats findUniqueOrThrow
   */
  export type PostStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * Filter, which PostStats to fetch.
     */
    where: PostStatsWhereUniqueInput
  }

  /**
   * PostStats findFirst
   */
  export type PostStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * Filter, which PostStats to fetch.
     */
    where?: PostStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostStats to fetch.
     */
    orderBy?: PostStatsOrderByWithRelationInput | PostStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostStats.
     */
    cursor?: PostStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostStats.
     */
    distinct?: PostStatsScalarFieldEnum | PostStatsScalarFieldEnum[]
  }

  /**
   * PostStats findFirstOrThrow
   */
  export type PostStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * Filter, which PostStats to fetch.
     */
    where?: PostStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostStats to fetch.
     */
    orderBy?: PostStatsOrderByWithRelationInput | PostStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostStats.
     */
    cursor?: PostStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostStats.
     */
    distinct?: PostStatsScalarFieldEnum | PostStatsScalarFieldEnum[]
  }

  /**
   * PostStats findMany
   */
  export type PostStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * Filter, which PostStats to fetch.
     */
    where?: PostStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostStats to fetch.
     */
    orderBy?: PostStatsOrderByWithRelationInput | PostStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostStats.
     */
    cursor?: PostStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostStats.
     */
    skip?: number
    distinct?: PostStatsScalarFieldEnum | PostStatsScalarFieldEnum[]
  }

  /**
   * PostStats create
   */
  export type PostStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostStats.
     */
    data: XOR<PostStatsCreateInput, PostStatsUncheckedCreateInput>
  }

  /**
   * PostStats createMany
   */
  export type PostStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostStats.
     */
    data: PostStatsCreateManyInput | PostStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostStats createManyAndReturn
   */
  export type PostStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostStats.
     */
    data: PostStatsCreateManyInput | PostStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostStats update
   */
  export type PostStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostStats.
     */
    data: XOR<PostStatsUpdateInput, PostStatsUncheckedUpdateInput>
    /**
     * Choose, which PostStats to update.
     */
    where: PostStatsWhereUniqueInput
  }

  /**
   * PostStats updateMany
   */
  export type PostStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostStats.
     */
    data: XOR<PostStatsUpdateManyMutationInput, PostStatsUncheckedUpdateManyInput>
    /**
     * Filter which PostStats to update
     */
    where?: PostStatsWhereInput
  }

  /**
   * PostStats upsert
   */
  export type PostStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostStats to update in case it exists.
     */
    where: PostStatsWhereUniqueInput
    /**
     * In case the PostStats found by the `where` argument doesn't exist, create a new PostStats with this data.
     */
    create: XOR<PostStatsCreateInput, PostStatsUncheckedCreateInput>
    /**
     * In case the PostStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostStatsUpdateInput, PostStatsUncheckedUpdateInput>
  }

  /**
   * PostStats delete
   */
  export type PostStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
    /**
     * Filter which PostStats to delete.
     */
    where: PostStatsWhereUniqueInput
  }

  /**
   * PostStats deleteMany
   */
  export type PostStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostStats to delete
     */
    where?: PostStatsWhereInput
  }

  /**
   * PostStats without action
   */
  export type PostStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostStats
     */
    select?: PostStatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostStatsInclude<ExtArgs> | null
  }


  /**
   * Model ProjectDetail
   */

  export type AggregateProjectDetail = {
    _count: ProjectDetailCountAggregateOutputType | null
    _avg: ProjectDetailAvgAggregateOutputType | null
    _sum: ProjectDetailSumAggregateOutputType | null
    _min: ProjectDetailMinAggregateOutputType | null
    _max: ProjectDetailMaxAggregateOutputType | null
  }

  export type ProjectDetailAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectDetailSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectDetailMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    dateOfCompletion: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDetailMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    dateOfCompletion: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDetailCountAggregateOutputType = {
    id: number
    name: number
    description: number
    dateOfCompletion: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectDetailAvgAggregateInputType = {
    id?: true
  }

  export type ProjectDetailSumAggregateInputType = {
    id?: true
  }

  export type ProjectDetailMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    dateOfCompletion?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDetailMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    dateOfCompletion?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDetailCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    dateOfCompletion?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetail to aggregate.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDetails
    **/
    _count?: true | ProjectDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDetailMaxAggregateInputType
  }

  export type GetProjectDetailAggregateType<T extends ProjectDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDetail[P]>
      : GetScalarType<T[P], AggregateProjectDetail[P]>
  }




  export type ProjectDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDetailWhereInput
    orderBy?: ProjectDetailOrderByWithAggregationInput | ProjectDetailOrderByWithAggregationInput[]
    by: ProjectDetailScalarFieldEnum[] | ProjectDetailScalarFieldEnum
    having?: ProjectDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDetailCountAggregateInputType | true
    _avg?: ProjectDetailAvgAggregateInputType
    _sum?: ProjectDetailSumAggregateInputType
    _min?: ProjectDetailMinAggregateInputType
    _max?: ProjectDetailMaxAggregateInputType
  }

  export type ProjectDetailGroupByOutputType = {
    id: number
    name: string
    description: string
    dateOfCompletion: string
    link: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectDetailCountAggregateOutputType | null
    _avg: ProjectDetailAvgAggregateOutputType | null
    _sum: ProjectDetailSumAggregateOutputType | null
    _min: ProjectDetailMinAggregateOutputType | null
    _max: ProjectDetailMaxAggregateOutputType | null
  }

  type GetProjectDetailGroupByPayload<T extends ProjectDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDetailGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    dateOfCompletion?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    dateOfCompletion?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projectDetail"]>

  export type ProjectDetailSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    dateOfCompletion?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ProjectDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDetail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      dateOfCompletion: string
      link: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectDetail"]>
    composites: {}
  }

  type ProjectDetailGetPayload<S extends boolean | null | undefined | ProjectDetailDefaultArgs> = $Result.GetResult<Prisma.$ProjectDetailPayload, S>

  type ProjectDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectDetailCountAggregateInputType | true
    }

  export interface ProjectDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDetail'], meta: { name: 'ProjectDetail' } }
    /**
     * Find zero or one ProjectDetail that matches the filter.
     * @param {ProjectDetailFindUniqueArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDetailFindUniqueArgs>(args: SelectSubset<T, ProjectDetailFindUniqueArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectDetailFindUniqueOrThrowArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindFirstArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDetailFindFirstArgs>(args?: SelectSubset<T, ProjectDetailFindFirstArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindFirstOrThrowArgs} args - Arguments to find a ProjectDetail
     * @example
     * // Get one ProjectDetail
     * const projectDetail = await prisma.projectDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDetails
     * const projectDetails = await prisma.projectDetail.findMany()
     * 
     * // Get first 10 ProjectDetails
     * const projectDetails = await prisma.projectDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDetailFindManyArgs>(args?: SelectSubset<T, ProjectDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectDetail.
     * @param {ProjectDetailCreateArgs} args - Arguments to create a ProjectDetail.
     * @example
     * // Create one ProjectDetail
     * const ProjectDetail = await prisma.projectDetail.create({
     *   data: {
     *     // ... data to create a ProjectDetail
     *   }
     * })
     * 
     */
    create<T extends ProjectDetailCreateArgs>(args: SelectSubset<T, ProjectDetailCreateArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectDetails.
     * @param {ProjectDetailCreateManyArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetail = await prisma.projectDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDetailCreateManyArgs>(args?: SelectSubset<T, ProjectDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDetails and returns the data saved in the database.
     * @param {ProjectDetailCreateManyAndReturnArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetail = await prisma.projectDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDetails and only return the `id`
     * const projectDetailWithIdOnly = await prisma.projectDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectDetail.
     * @param {ProjectDetailDeleteArgs} args - Arguments to delete one ProjectDetail.
     * @example
     * // Delete one ProjectDetail
     * const ProjectDetail = await prisma.projectDetail.delete({
     *   where: {
     *     // ... filter to delete one ProjectDetail
     *   }
     * })
     * 
     */
    delete<T extends ProjectDetailDeleteArgs>(args: SelectSubset<T, ProjectDetailDeleteArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectDetail.
     * @param {ProjectDetailUpdateArgs} args - Arguments to update one ProjectDetail.
     * @example
     * // Update one ProjectDetail
     * const projectDetail = await prisma.projectDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDetailUpdateArgs>(args: SelectSubset<T, ProjectDetailUpdateArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectDetails.
     * @param {ProjectDetailDeleteManyArgs} args - Arguments to filter ProjectDetails to delete.
     * @example
     * // Delete a few ProjectDetails
     * const { count } = await prisma.projectDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDetailDeleteManyArgs>(args?: SelectSubset<T, ProjectDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDetails
     * const projectDetail = await prisma.projectDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDetailUpdateManyArgs>(args: SelectSubset<T, ProjectDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectDetail.
     * @param {ProjectDetailUpsertArgs} args - Arguments to update or create a ProjectDetail.
     * @example
     * // Update or create a ProjectDetail
     * const projectDetail = await prisma.projectDetail.upsert({
     *   create: {
     *     // ... data to create a ProjectDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDetail we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDetailUpsertArgs>(args: SelectSubset<T, ProjectDetailUpsertArgs<ExtArgs>>): Prisma__ProjectDetailClient<$Result.GetResult<Prisma.$ProjectDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailCountArgs} args - Arguments to filter ProjectDetails to count.
     * @example
     * // Count the number of ProjectDetails
     * const count = await prisma.projectDetail.count({
     *   where: {
     *     // ... the filter for the ProjectDetails we want to count
     *   }
     * })
    **/
    count<T extends ProjectDetailCountArgs>(
      args?: Subset<T, ProjectDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDetailAggregateArgs>(args: Subset<T, ProjectDetailAggregateArgs>): Prisma.PrismaPromise<GetProjectDetailAggregateType<T>>

    /**
     * Group by ProjectDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailGroupByArgs} args - Group by arguments.
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
      T extends ProjectDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDetailGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDetail model
   */
  readonly fields: ProjectDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ProjectDetail model
   */ 
  interface ProjectDetailFieldRefs {
    readonly id: FieldRef<"ProjectDetail", 'Int'>
    readonly name: FieldRef<"ProjectDetail", 'String'>
    readonly description: FieldRef<"ProjectDetail", 'String'>
    readonly dateOfCompletion: FieldRef<"ProjectDetail", 'String'>
    readonly link: FieldRef<"ProjectDetail", 'String'>
    readonly createdAt: FieldRef<"ProjectDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDetail findUnique
   */
  export type ProjectDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail findUniqueOrThrow
   */
  export type ProjectDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail findFirst
   */
  export type ProjectDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail findFirstOrThrow
   */
  export type ProjectDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProjectDetail to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail findMany
   */
  export type ProjectDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailOrderByWithRelationInput | ProjectDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDetails.
     */
    cursor?: ProjectDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    distinct?: ProjectDetailScalarFieldEnum | ProjectDetailScalarFieldEnum[]
  }

  /**
   * ProjectDetail create
   */
  export type ProjectDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * The data needed to create a ProjectDetail.
     */
    data: XOR<ProjectDetailCreateInput, ProjectDetailUncheckedCreateInput>
  }

  /**
   * ProjectDetail createMany
   */
  export type ProjectDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailCreateManyInput | ProjectDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetail createManyAndReturn
   */
  export type ProjectDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailCreateManyInput | ProjectDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetail update
   */
  export type ProjectDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * The data needed to update a ProjectDetail.
     */
    data: XOR<ProjectDetailUpdateInput, ProjectDetailUncheckedUpdateInput>
    /**
     * Choose, which ProjectDetail to update.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail updateMany
   */
  export type ProjectDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailUpdateManyMutationInput, ProjectDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailWhereInput
  }

  /**
   * ProjectDetail upsert
   */
  export type ProjectDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * The filter to search for the ProjectDetail to update in case it exists.
     */
    where: ProjectDetailWhereUniqueInput
    /**
     * In case the ProjectDetail found by the `where` argument doesn't exist, create a new ProjectDetail with this data.
     */
    create: XOR<ProjectDetailCreateInput, ProjectDetailUncheckedCreateInput>
    /**
     * In case the ProjectDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDetailUpdateInput, ProjectDetailUncheckedUpdateInput>
  }

  /**
   * ProjectDetail delete
   */
  export type ProjectDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
    /**
     * Filter which ProjectDetail to delete.
     */
    where: ProjectDetailWhereUniqueInput
  }

  /**
   * ProjectDetail deleteMany
   */
  export type ProjectDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetails to delete
     */
    where?: ProjectDetailWhereInput
  }

  /**
   * ProjectDetail without action
   */
  export type ProjectDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetail
     */
    select?: ProjectDetailSelect<ExtArgs> | null
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


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    status: 'status',
    sourceLink: 'sourceLink',
    tags: 'tags',
    image: 'image',
    author: 'author',
    publishedAt: 'publishedAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostStatsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    views: 'views',
    likes: 'likes',
    shares: 'shares',
    comments: 'comments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostStatsScalarFieldEnum = (typeof PostStatsScalarFieldEnum)[keyof typeof PostStatsScalarFieldEnum]


  export const ProjectDetailScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    dateOfCompletion: 'dateOfCompletion',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectDetailScalarFieldEnum = (typeof ProjectDetailScalarFieldEnum)[keyof typeof ProjectDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    status?: StringFilter<"Post"> | string
    sourceLink?: StringFilter<"Post"> | string
    tags?: StringNullableListFilter<"Post">
    image?: StringNullableFilter<"Post"> | string | null
    author?: StringNullableFilter<"Post"> | string | null
    publishedAt?: StringFilter<"Post"> | string
    updatedAt?: StringFilter<"Post"> | string
    PostStats?: XOR<PostStatsNullableRelationFilter, PostStatsWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sourceLink?: SortOrder
    tags?: SortOrder
    image?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
    PostStats?: PostStatsOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    status?: StringFilter<"Post"> | string
    sourceLink?: StringFilter<"Post"> | string
    tags?: StringNullableListFilter<"Post">
    image?: StringNullableFilter<"Post"> | string | null
    author?: StringNullableFilter<"Post"> | string | null
    publishedAt?: StringFilter<"Post"> | string
    updatedAt?: StringFilter<"Post"> | string
    PostStats?: XOR<PostStatsNullableRelationFilter, PostStatsWhereInput> | null
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sourceLink?: SortOrder
    tags?: SortOrder
    image?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    status?: StringWithAggregatesFilter<"Post"> | string
    sourceLink?: StringWithAggregatesFilter<"Post"> | string
    tags?: StringNullableListFilter<"Post">
    image?: StringNullableWithAggregatesFilter<"Post"> | string | null
    author?: StringNullableWithAggregatesFilter<"Post"> | string | null
    publishedAt?: StringWithAggregatesFilter<"Post"> | string
    updatedAt?: StringWithAggregatesFilter<"Post"> | string
  }

  export type PostStatsWhereInput = {
    AND?: PostStatsWhereInput | PostStatsWhereInput[]
    OR?: PostStatsWhereInput[]
    NOT?: PostStatsWhereInput | PostStatsWhereInput[]
    id?: IntFilter<"PostStats"> | number
    postId?: IntFilter<"PostStats"> | number
    views?: IntFilter<"PostStats"> | number
    likes?: IntFilter<"PostStats"> | number
    shares?: IntFilter<"PostStats"> | number
    comments?: IntFilter<"PostStats"> | number
    createdAt?: DateTimeFilter<"PostStats"> | Date | string
    updatedAt?: DateTimeFilter<"PostStats"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type PostStatsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    shares?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId?: number
    AND?: PostStatsWhereInput | PostStatsWhereInput[]
    OR?: PostStatsWhereInput[]
    NOT?: PostStatsWhereInput | PostStatsWhereInput[]
    views?: IntFilter<"PostStats"> | number
    likes?: IntFilter<"PostStats"> | number
    shares?: IntFilter<"PostStats"> | number
    comments?: IntFilter<"PostStats"> | number
    createdAt?: DateTimeFilter<"PostStats"> | Date | string
    updatedAt?: DateTimeFilter<"PostStats"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id" | "postId">

  export type PostStatsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    shares?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostStatsCountOrderByAggregateInput
    _avg?: PostStatsAvgOrderByAggregateInput
    _max?: PostStatsMaxOrderByAggregateInput
    _min?: PostStatsMinOrderByAggregateInput
    _sum?: PostStatsSumOrderByAggregateInput
  }

  export type PostStatsScalarWhereWithAggregatesInput = {
    AND?: PostStatsScalarWhereWithAggregatesInput | PostStatsScalarWhereWithAggregatesInput[]
    OR?: PostStatsScalarWhereWithAggregatesInput[]
    NOT?: PostStatsScalarWhereWithAggregatesInput | PostStatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostStats"> | number
    postId?: IntWithAggregatesFilter<"PostStats"> | number
    views?: IntWithAggregatesFilter<"PostStats"> | number
    likes?: IntWithAggregatesFilter<"PostStats"> | number
    shares?: IntWithAggregatesFilter<"PostStats"> | number
    comments?: IntWithAggregatesFilter<"PostStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostStats"> | Date | string
  }

  export type ProjectDetailWhereInput = {
    AND?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    OR?: ProjectDetailWhereInput[]
    NOT?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    id?: IntFilter<"ProjectDetail"> | number
    name?: StringFilter<"ProjectDetail"> | string
    description?: StringFilter<"ProjectDetail"> | string
    dateOfCompletion?: StringFilter<"ProjectDetail"> | string
    link?: StringFilter<"ProjectDetail"> | string
    createdAt?: DateTimeFilter<"ProjectDetail"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDetail"> | Date | string
  }

  export type ProjectDetailOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dateOfCompletion?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    OR?: ProjectDetailWhereInput[]
    NOT?: ProjectDetailWhereInput | ProjectDetailWhereInput[]
    name?: StringFilter<"ProjectDetail"> | string
    description?: StringFilter<"ProjectDetail"> | string
    dateOfCompletion?: StringFilter<"ProjectDetail"> | string
    link?: StringFilter<"ProjectDetail"> | string
    createdAt?: DateTimeFilter<"ProjectDetail"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDetail"> | Date | string
  }, "id">

  export type ProjectDetailOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dateOfCompletion?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectDetailCountOrderByAggregateInput
    _avg?: ProjectDetailAvgOrderByAggregateInput
    _max?: ProjectDetailMaxOrderByAggregateInput
    _min?: ProjectDetailMinOrderByAggregateInput
    _sum?: ProjectDetailSumOrderByAggregateInput
  }

  export type ProjectDetailScalarWhereWithAggregatesInput = {
    AND?: ProjectDetailScalarWhereWithAggregatesInput | ProjectDetailScalarWhereWithAggregatesInput[]
    OR?: ProjectDetailScalarWhereWithAggregatesInput[]
    NOT?: ProjectDetailScalarWhereWithAggregatesInput | ProjectDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectDetail"> | number
    name?: StringWithAggregatesFilter<"ProjectDetail"> | string
    description?: StringWithAggregatesFilter<"ProjectDetail"> | string
    dateOfCompletion?: StringWithAggregatesFilter<"ProjectDetail"> | string
    link?: StringWithAggregatesFilter<"ProjectDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectDetail"> | Date | string
  }

  export type PostCreateInput = {
    title: string
    slug: string
    content: string
    status: string
    sourceLink: string
    tags?: PostCreatetagsInput | string[]
    image?: string | null
    author?: string | null
    publishedAt: string
    updatedAt: string
    PostStats?: PostStatsCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    content: string
    status: string
    sourceLink: string
    tags?: PostCreatetagsInput | string[]
    image?: string | null
    author?: string | null
    publishedAt: string
    updatedAt: string
    PostStats?: PostStatsUncheckedCreateNestedOneWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sourceLink?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    PostStats?: PostStatsUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sourceLink?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
    PostStats?: PostStatsUncheckedUpdateOneWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    slug: string
    content: string
    status: string
    sourceLink: string
    tags?: PostCreatetagsInput | string[]
    image?: string | null
    author?: string | null
    publishedAt: string
    updatedAt: string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sourceLink?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sourceLink?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type PostStatsCreateInput = {
    views?: number
    likes?: number
    shares?: number
    comments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPostStatsInput
  }

  export type PostStatsUncheckedCreateInput = {
    id?: number
    postId: number
    views?: number
    likes?: number
    shares?: number
    comments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostStatsUpdateInput = {
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPostStatsNestedInput
  }

  export type PostStatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostStatsCreateManyInput = {
    id?: number
    postId: number
    views?: number
    likes?: number
    shares?: number
    comments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostStatsUpdateManyMutationInput = {
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostStatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailCreateInput = {
    name: string
    description: string
    dateOfCompletion: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDetailUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    dateOfCompletion: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDetailUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateOfCompletion?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateOfCompletion?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailCreateManyInput = {
    id?: number
    name: string
    description: string
    dateOfCompletion: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDetailUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateOfCompletion?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateOfCompletion?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PostStatsNullableRelationFilter = {
    is?: PostStatsWhereInput | null
    isNot?: PostStatsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sourceLink?: SortOrder
    tags?: SortOrder
    image?: SortOrder
    author?: SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sourceLink?: SortOrder
    image?: SortOrder
    author?: SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sourceLink?: SortOrder
    image?: SortOrder
    author?: SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostStatsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    shares?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostStatsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    shares?: SortOrder
    comments?: SortOrder
  }

  export type PostStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    shares?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostStatsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    shares?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostStatsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    shares?: SortOrder
    comments?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectDetailCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dateOfCompletion?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDetailAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dateOfCompletion?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDetailMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dateOfCompletion?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDetailSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostCreatetagsInput = {
    set: string[]
  }

  export type PostStatsCreateNestedOneWithoutPostInput = {
    create?: XOR<PostStatsCreateWithoutPostInput, PostStatsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostStatsCreateOrConnectWithoutPostInput
    connect?: PostStatsWhereUniqueInput
  }

  export type PostStatsUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<PostStatsCreateWithoutPostInput, PostStatsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostStatsCreateOrConnectWithoutPostInput
    connect?: PostStatsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostStatsUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostStatsCreateWithoutPostInput, PostStatsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostStatsCreateOrConnectWithoutPostInput
    upsert?: PostStatsUpsertWithoutPostInput
    disconnect?: PostStatsWhereInput | boolean
    delete?: PostStatsWhereInput | boolean
    connect?: PostStatsWhereUniqueInput
    update?: XOR<XOR<PostStatsUpdateToOneWithWhereWithoutPostInput, PostStatsUpdateWithoutPostInput>, PostStatsUncheckedUpdateWithoutPostInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostStatsUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostStatsCreateWithoutPostInput, PostStatsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostStatsCreateOrConnectWithoutPostInput
    upsert?: PostStatsUpsertWithoutPostInput
    disconnect?: PostStatsWhereInput | boolean
    delete?: PostStatsWhereInput | boolean
    connect?: PostStatsWhereUniqueInput
    update?: XOR<XOR<PostStatsUpdateToOneWithWhereWithoutPostInput, PostStatsUpdateWithoutPostInput>, PostStatsUncheckedUpdateWithoutPostInput>
  }

  export type PostCreateNestedOneWithoutPostStatsInput = {
    create?: XOR<PostCreateWithoutPostStatsInput, PostUncheckedCreateWithoutPostStatsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostStatsInput
    connect?: PostWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateOneRequiredWithoutPostStatsNestedInput = {
    create?: XOR<PostCreateWithoutPostStatsInput, PostUncheckedCreateWithoutPostStatsInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostStatsInput
    upsert?: PostUpsertWithoutPostStatsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostStatsInput, PostUpdateWithoutPostStatsInput>, PostUncheckedUpdateWithoutPostStatsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostStatsCreateWithoutPostInput = {
    views?: number
    likes?: number
    shares?: number
    comments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostStatsUncheckedCreateWithoutPostInput = {
    id?: number
    views?: number
    likes?: number
    shares?: number
    comments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostStatsCreateOrConnectWithoutPostInput = {
    where: PostStatsWhereUniqueInput
    create: XOR<PostStatsCreateWithoutPostInput, PostStatsUncheckedCreateWithoutPostInput>
  }

  export type PostStatsUpsertWithoutPostInput = {
    update: XOR<PostStatsUpdateWithoutPostInput, PostStatsUncheckedUpdateWithoutPostInput>
    create: XOR<PostStatsCreateWithoutPostInput, PostStatsUncheckedCreateWithoutPostInput>
    where?: PostStatsWhereInput
  }

  export type PostStatsUpdateToOneWithWhereWithoutPostInput = {
    where?: PostStatsWhereInput
    data: XOR<PostStatsUpdateWithoutPostInput, PostStatsUncheckedUpdateWithoutPostInput>
  }

  export type PostStatsUpdateWithoutPostInput = {
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostStatsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutPostStatsInput = {
    title: string
    slug: string
    content: string
    status: string
    sourceLink: string
    tags?: PostCreatetagsInput | string[]
    image?: string | null
    author?: string | null
    publishedAt: string
    updatedAt: string
  }

  export type PostUncheckedCreateWithoutPostStatsInput = {
    id?: number
    title: string
    slug: string
    content: string
    status: string
    sourceLink: string
    tags?: PostCreatetagsInput | string[]
    image?: string | null
    author?: string | null
    publishedAt: string
    updatedAt: string
  }

  export type PostCreateOrConnectWithoutPostStatsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostStatsInput, PostUncheckedCreateWithoutPostStatsInput>
  }

  export type PostUpsertWithoutPostStatsInput = {
    update: XOR<PostUpdateWithoutPostStatsInput, PostUncheckedUpdateWithoutPostStatsInput>
    create: XOR<PostCreateWithoutPostStatsInput, PostUncheckedCreateWithoutPostStatsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostStatsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostStatsInput, PostUncheckedUpdateWithoutPostStatsInput>
  }

  export type PostUpdateWithoutPostStatsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sourceLink?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateWithoutPostStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sourceLink?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: StringFieldUpdateOperationsInput | string
    updatedAt?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostStatsDefaultArgs instead
     */
    export type PostStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostStatsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDetailDefaultArgs instead
     */
    export type ProjectDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDetailDefaultArgs<ExtArgs>

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