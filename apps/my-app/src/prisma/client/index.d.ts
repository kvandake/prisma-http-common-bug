
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  id: string
  email: string
  password: string
  firstName: string | null
  lastName: string | null
  middleName: string | null
}

/**
 * Model Tenant
 */

export type Tenant = {
  id: string
  name: string
  slug: string
}

/**
 * Model UserTenant
 */

export type UserTenant = {
  userId: string
  tenantId: string
  roles: string[]
  state: UserState
  createdAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserState: {
  VERIFY: 'VERIFY',
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED'
};

export type UserState = (typeof UserState)[keyof typeof UserState]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<GlobalReject>;

  /**
   * `prisma.userTenant`: Exposes CRUD operations for the **UserTenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTenants
    * const userTenants = await prisma.userTenant.findMany()
    * ```
    */
  get userTenant(): Prisma.UserTenantDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.21.2
   * Query Engine version: e421996c87d5f3c8f7eeadd502d4ad402c89464d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  export type Union = any

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Tenant: 'Tenant',
    UserTenant: 'UserTenant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
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
   * Model User
   */


  export type AggregateUser = {
    count: UserCountAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    middleName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    middleName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    middleName: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    middleName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    middleName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    middleName?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UserCountAggregateInputType | true
    min?: UserMinAggregateInputType
    max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    middleName: string | null
    count: UserCountAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<Array<
    PickArray<UserGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UserGroupByOutputType))]: GetScalarType<T[P], UserGroupByOutputType[P]>
    }
  >>
    

  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    tenants?: boolean | UserTenantFindManyArgs
  }

  export type UserInclude = {
    tenants?: boolean | UserTenantFindManyArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'tenants'
        ? Array < UserTenantGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'tenants'
        ? Array < UserTenantGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tenants<T extends UserTenantFindManyArgs = {}>(args?: Subset<T, UserTenantFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserTenant>>, PrismaPromise<Array<UserTenantGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
  }



  /**
   * Model Tenant
   */


  export type AggregateTenant = {
    count: TenantCountAggregateOutputType | null
    min: TenantMinAggregateOutputType | null
    max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type TenantAggregateArgs = {
    /**
     * Filter which Tenant to aggregate.
    **/
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
    **/
    orderBy?: Enumerable<TenantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
    [P in keyof T & keyof AggregateTenant]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }


    
    
  export type TenantGroupByArgs = {
    where?: TenantWhereInput
    orderBy?: Enumerable<TenantOrderByInput>
    by: Array<TenantScalarFieldEnum>
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: TenantCountAggregateInputType | true
    min?: TenantMinAggregateInputType
    max?: TenantMaxAggregateInputType
  }


  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    count: TenantCountAggregateOutputType | null
    min: TenantMinAggregateOutputType | null
    max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Promise<Array<
    PickArray<TenantGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof TenantGroupByOutputType))]: GetScalarType<T[P], TenantGroupByOutputType[P]>
    }
  >>
    

  export type TenantSelect = {
    id?: boolean
    name?: boolean
    slug?: boolean
    users?: boolean | UserTenantFindManyArgs
  }

  export type TenantInclude = {
    users?: boolean | UserTenantFindManyArgs
  }

  export type TenantGetPayload<
    S extends boolean | null | undefined | TenantArgs,
    U = keyof S
      > = S extends true
        ? Tenant
    : S extends undefined
    ? never
    : S extends TenantArgs | TenantFindManyArgs
    ?'include' extends U
    ? Tenant  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'users'
        ? Array < UserTenantGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tenant ?Tenant [P]
  : 
          P extends 'users'
        ? Array < UserTenantGetPayload<S['select'][P]>>  : never
  } 
    : Tenant
  : Tenant


  type TenantCountArgs = Merge<
    Omit<TenantFindManyArgs, 'select' | 'include'> & {
      select?: TenantCountAggregateInputType | true
    }
  >

  export interface TenantDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TenantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TenantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tenant'> extends True ? CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>> : CheckSelect<T, Prisma__TenantClient<Tenant | null >, Prisma__TenantClient<TenantGetPayload<T> | null >>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TenantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TenantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tenant'> extends True ? CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>> : CheckSelect<T, Prisma__TenantClient<Tenant | null >, Prisma__TenantClient<TenantGetPayload<T> | null >>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TenantFindManyArgs>(
      args?: SelectSubset<T, TenantFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tenant>>, PrismaPromise<Array<TenantGetPayload<T>>>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
    **/
    create<T extends TenantCreateArgs>(
      args: SelectSubset<T, TenantCreateArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Create many Tenants.
     *     @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     *     @example
     *     // Create many Tenants
     *     const tenant = await prisma.tenant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TenantCreateManyArgs>(
      args?: SelectSubset<T, TenantCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
    **/
    delete<T extends TenantDeleteArgs>(
      args: SelectSubset<T, TenantDeleteArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TenantUpdateArgs>(
      args: SelectSubset<T, TenantUpdateArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TenantDeleteManyArgs>(
      args?: SelectSubset<T, TenantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TenantUpdateManyArgs>(
      args: SelectSubset<T, TenantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
    **/
    upsert<T extends TenantUpsertArgs>(
      args: SelectSubset<T, TenantUpsertArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TenantClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserTenantFindManyArgs = {}>(args?: Subset<T, UserTenantFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserTenant>>, PrismaPromise<Array<UserTenantGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
    /**
     * Throw an Error if a Tenant can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tenant to fetch.
    **/
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
    /**
     * Throw an Error if a Tenant can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tenant to fetch.
    **/
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
    **/
    orderBy?: Enumerable<TenantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
    **/
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
    **/
    distinct?: Enumerable<TenantScalarFieldEnum>
  }


  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
    /**
     * Filter, which Tenants to fetch.
    **/
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
    **/
    orderBy?: Enumerable<TenantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
    **/
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
    **/
    skip?: number
    distinct?: Enumerable<TenantScalarFieldEnum>
  }


  /**
   * Tenant create
   */
  export type TenantCreateArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
    /**
     * The data needed to create a Tenant.
    **/
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }


  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs = {
    data: Enumerable<TenantCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tenant update
   */
  export type TenantUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
    /**
     * The data needed to update a Tenant.
    **/
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
    **/
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs = {
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    where?: TenantWhereInput
  }


  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
    /**
     * The filter to search for the Tenant to update in case it exists.
    **/
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
    **/
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }


  /**
   * Tenant delete
   */
  export type TenantDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
    /**
     * Filter which Tenant to delete.
    **/
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs = {
    where?: TenantWhereInput
  }


  /**
   * Tenant without action
   */
  export type TenantArgs = {
    /**
     * Select specific fields to fetch from the Tenant
    **/
    select?: TenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TenantInclude | null
  }



  /**
   * Model UserTenant
   */


  export type AggregateUserTenant = {
    count: UserTenantCountAggregateOutputType | null
    min: UserTenantMinAggregateOutputType | null
    max: UserTenantMaxAggregateOutputType | null
  }

  export type UserTenantMinAggregateOutputType = {
    userId: string | null
    tenantId: string | null
    state: UserState | null
    createdAt: Date | null
  }

  export type UserTenantMaxAggregateOutputType = {
    userId: string | null
    tenantId: string | null
    state: UserState | null
    createdAt: Date | null
  }

  export type UserTenantCountAggregateOutputType = {
    userId: number
    tenantId: number
    roles: number
    state: number
    createdAt: number
    _all: number
  }


  export type UserTenantMinAggregateInputType = {
    userId?: true
    tenantId?: true
    state?: true
    createdAt?: true
  }

  export type UserTenantMaxAggregateInputType = {
    userId?: true
    tenantId?: true
    state?: true
    createdAt?: true
  }

  export type UserTenantCountAggregateInputType = {
    userId?: true
    tenantId?: true
    roles?: true
    state?: true
    createdAt?: true
    _all?: true
  }

  export type UserTenantAggregateArgs = {
    /**
     * Filter which UserTenant to aggregate.
    **/
    where?: UserTenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTenants to fetch.
    **/
    orderBy?: Enumerable<UserTenantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserTenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTenants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTenants.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTenants
    **/
    count?: true | UserTenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserTenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserTenantMaxAggregateInputType
  }

  export type GetUserTenantAggregateType<T extends UserTenantAggregateArgs> = {
    [P in keyof T & keyof AggregateUserTenant]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTenant[P]>
      : GetScalarType<T[P], AggregateUserTenant[P]>
  }


    
    
  export type UserTenantGroupByArgs = {
    where?: UserTenantWhereInput
    orderBy?: Enumerable<UserTenantOrderByInput>
    by: Array<UserTenantScalarFieldEnum>
    having?: UserTenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UserTenantCountAggregateInputType | true
    min?: UserTenantMinAggregateInputType
    max?: UserTenantMaxAggregateInputType
  }


  export type UserTenantGroupByOutputType = {
    userId: string
    tenantId: string
    roles: string[]
    state: UserState
    createdAt: Date
    count: UserTenantCountAggregateOutputType | null
    min: UserTenantMinAggregateOutputType | null
    max: UserTenantMaxAggregateOutputType | null
  }

  type GetUserTenantGroupByPayload<T extends UserTenantGroupByArgs> = Promise<Array<
    PickArray<UserTenantGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UserTenantGroupByOutputType))]: GetScalarType<T[P], UserTenantGroupByOutputType[P]>
    }
  >>
    

  export type UserTenantSelect = {
    user?: boolean | UserArgs
    userId?: boolean
    tenant?: boolean | TenantArgs
    tenantId?: boolean
    roles?: boolean
    state?: boolean
    createdAt?: boolean
  }

  export type UserTenantInclude = {
    user?: boolean | UserArgs
    tenant?: boolean | TenantArgs
  }

  export type UserTenantGetPayload<
    S extends boolean | null | undefined | UserTenantArgs,
    U = keyof S
      > = S extends true
        ? UserTenant
    : S extends undefined
    ? never
    : S extends UserTenantArgs | UserTenantFindManyArgs
    ?'include' extends U
    ? UserTenant  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'tenant'
        ? TenantGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserTenant ?UserTenant [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'tenant'
        ? TenantGetPayload<S['select'][P]> : never
  } 
    : UserTenant
  : UserTenant


  type UserTenantCountArgs = Merge<
    Omit<UserTenantFindManyArgs, 'select' | 'include'> & {
      select?: UserTenantCountAggregateInputType | true
    }
  >

  export interface UserTenantDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserTenant that matches the filter.
     * @param {UserTenantFindUniqueArgs} args - Arguments to find a UserTenant
     * @example
     * // Get one UserTenant
     * const userTenant = await prisma.userTenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserTenantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserTenantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserTenant'> extends True ? CheckSelect<T, Prisma__UserTenantClient<UserTenant>, Prisma__UserTenantClient<UserTenantGetPayload<T>>> : CheckSelect<T, Prisma__UserTenantClient<UserTenant | null >, Prisma__UserTenantClient<UserTenantGetPayload<T> | null >>

    /**
     * Find the first UserTenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTenantFindFirstArgs} args - Arguments to find a UserTenant
     * @example
     * // Get one UserTenant
     * const userTenant = await prisma.userTenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserTenantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserTenantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserTenant'> extends True ? CheckSelect<T, Prisma__UserTenantClient<UserTenant>, Prisma__UserTenantClient<UserTenantGetPayload<T>>> : CheckSelect<T, Prisma__UserTenantClient<UserTenant | null >, Prisma__UserTenantClient<UserTenantGetPayload<T> | null >>

    /**
     * Find zero or more UserTenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTenantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTenants
     * const userTenants = await prisma.userTenant.findMany()
     * 
     * // Get first 10 UserTenants
     * const userTenants = await prisma.userTenant.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userTenantWithUserIdOnly = await prisma.userTenant.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserTenantFindManyArgs>(
      args?: SelectSubset<T, UserTenantFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserTenant>>, PrismaPromise<Array<UserTenantGetPayload<T>>>>

    /**
     * Create a UserTenant.
     * @param {UserTenantCreateArgs} args - Arguments to create a UserTenant.
     * @example
     * // Create one UserTenant
     * const UserTenant = await prisma.userTenant.create({
     *   data: {
     *     // ... data to create a UserTenant
     *   }
     * })
     * 
    **/
    create<T extends UserTenantCreateArgs>(
      args: SelectSubset<T, UserTenantCreateArgs>
    ): CheckSelect<T, Prisma__UserTenantClient<UserTenant>, Prisma__UserTenantClient<UserTenantGetPayload<T>>>

    /**
     * Create many UserTenants.
     *     @param {UserTenantCreateManyArgs} args - Arguments to create many UserTenants.
     *     @example
     *     // Create many UserTenants
     *     const userTenant = await prisma.userTenant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserTenantCreateManyArgs>(
      args?: SelectSubset<T, UserTenantCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserTenant.
     * @param {UserTenantDeleteArgs} args - Arguments to delete one UserTenant.
     * @example
     * // Delete one UserTenant
     * const UserTenant = await prisma.userTenant.delete({
     *   where: {
     *     // ... filter to delete one UserTenant
     *   }
     * })
     * 
    **/
    delete<T extends UserTenantDeleteArgs>(
      args: SelectSubset<T, UserTenantDeleteArgs>
    ): CheckSelect<T, Prisma__UserTenantClient<UserTenant>, Prisma__UserTenantClient<UserTenantGetPayload<T>>>

    /**
     * Update one UserTenant.
     * @param {UserTenantUpdateArgs} args - Arguments to update one UserTenant.
     * @example
     * // Update one UserTenant
     * const userTenant = await prisma.userTenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserTenantUpdateArgs>(
      args: SelectSubset<T, UserTenantUpdateArgs>
    ): CheckSelect<T, Prisma__UserTenantClient<UserTenant>, Prisma__UserTenantClient<UserTenantGetPayload<T>>>

    /**
     * Delete zero or more UserTenants.
     * @param {UserTenantDeleteManyArgs} args - Arguments to filter UserTenants to delete.
     * @example
     * // Delete a few UserTenants
     * const { count } = await prisma.userTenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserTenantDeleteManyArgs>(
      args?: SelectSubset<T, UserTenantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTenants
     * const userTenant = await prisma.userTenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserTenantUpdateManyArgs>(
      args: SelectSubset<T, UserTenantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserTenant.
     * @param {UserTenantUpsertArgs} args - Arguments to update or create a UserTenant.
     * @example
     * // Update or create a UserTenant
     * const userTenant = await prisma.userTenant.upsert({
     *   create: {
     *     // ... data to create a UserTenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTenant we want to update
     *   }
     * })
    **/
    upsert<T extends UserTenantUpsertArgs>(
      args: SelectSubset<T, UserTenantUpsertArgs>
    ): CheckSelect<T, Prisma__UserTenantClient<UserTenant>, Prisma__UserTenantClient<UserTenantGetPayload<T>>>

    /**
     * Count the number of UserTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTenantCountArgs} args - Arguments to filter UserTenants to count.
     * @example
     * // Count the number of UserTenants
     * const count = await prisma.userTenant.count({
     *   where: {
     *     // ... the filter for the UserTenants we want to count
     *   }
     * })
    **/
    count<T extends UserTenantCountArgs>(
      args?: Subset<T, UserTenantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends UserTenantAggregateArgs>(args: Subset<T, UserTenantAggregateArgs>): PrismaPromise<GetUserTenantAggregateType<T>>

    /**
     * Group by UserTenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTenantGroupByArgs['orderBy'] }
        : { orderBy?: UserTenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserTenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTenantGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserTenantClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    tenant<T extends TenantArgs = {}>(args?: Subset<T, TenantArgs>): CheckSelect<T, Prisma__TenantClient<Tenant | null >, Prisma__TenantClient<TenantGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserTenant findUnique
   */
  export type UserTenantFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
    /**
     * Throw an Error if a UserTenant can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserTenant to fetch.
    **/
    where: UserTenantWhereUniqueInput
  }


  /**
   * UserTenant findFirst
   */
  export type UserTenantFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
    /**
     * Throw an Error if a UserTenant can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserTenant to fetch.
    **/
    where?: UserTenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTenants to fetch.
    **/
    orderBy?: Enumerable<UserTenantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTenants.
    **/
    cursor?: UserTenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTenants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTenants.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTenants.
    **/
    distinct?: Enumerable<UserTenantScalarFieldEnum>
  }


  /**
   * UserTenant findMany
   */
  export type UserTenantFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
    /**
     * Filter, which UserTenants to fetch.
    **/
    where?: UserTenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTenants to fetch.
    **/
    orderBy?: Enumerable<UserTenantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTenants.
    **/
    cursor?: UserTenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTenants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTenants.
    **/
    skip?: number
    distinct?: Enumerable<UserTenantScalarFieldEnum>
  }


  /**
   * UserTenant create
   */
  export type UserTenantCreateArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
    /**
     * The data needed to create a UserTenant.
    **/
    data: XOR<UserTenantCreateInput, UserTenantUncheckedCreateInput>
  }


  /**
   * UserTenant createMany
   */
  export type UserTenantCreateManyArgs = {
    data: Enumerable<UserTenantCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserTenant update
   */
  export type UserTenantUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
    /**
     * The data needed to update a UserTenant.
    **/
    data: XOR<UserTenantUpdateInput, UserTenantUncheckedUpdateInput>
    /**
     * Choose, which UserTenant to update.
    **/
    where: UserTenantWhereUniqueInput
  }


  /**
   * UserTenant updateMany
   */
  export type UserTenantUpdateManyArgs = {
    data: XOR<UserTenantUpdateManyMutationInput, UserTenantUncheckedUpdateManyInput>
    where?: UserTenantWhereInput
  }


  /**
   * UserTenant upsert
   */
  export type UserTenantUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
    /**
     * The filter to search for the UserTenant to update in case it exists.
    **/
    where: UserTenantWhereUniqueInput
    /**
     * In case the UserTenant found by the `where` argument doesn't exist, create a new UserTenant with this data.
    **/
    create: XOR<UserTenantCreateInput, UserTenantUncheckedCreateInput>
    /**
     * In case the UserTenant was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserTenantUpdateInput, UserTenantUncheckedUpdateInput>
  }


  /**
   * UserTenant delete
   */
  export type UserTenantDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
    /**
     * Filter which UserTenant to delete.
    **/
    where: UserTenantWhereUniqueInput
  }


  /**
   * UserTenant deleteMany
   */
  export type UserTenantDeleteManyArgs = {
    where?: UserTenantWhereInput
  }


  /**
   * UserTenant without action
   */
  export type UserTenantArgs = {
    /**
     * Select specific fields to fetch from the UserTenant
    **/
    select?: UserTenantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserTenantInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserTenantScalarFieldEnum: {
    userId: 'userId',
    tenantId: 'tenantId',
    roles: 'roles',
    state: 'state',
    createdAt: 'createdAt'
  };

  export type UserTenantScalarFieldEnum = (typeof UserTenantScalarFieldEnum)[keyof typeof UserTenantScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    middleName?: StringNullableFilter | string | null
    tenants?: UserTenantListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    middleName?: StringNullableWithAggregatesFilter | string | null
  }

  export type TenantWhereInput = {
    AND?: Enumerable<TenantWhereInput>
    OR?: Enumerable<TenantWhereInput>
    NOT?: Enumerable<TenantWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    slug?: StringFilter | string
    users?: UserTenantListRelationFilter
  }

  export type TenantOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TenantWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TenantScalarWhereWithAggregatesInput>
    OR?: Enumerable<TenantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TenantScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
  }

  export type UserTenantWhereInput = {
    AND?: Enumerable<UserTenantWhereInput>
    OR?: Enumerable<UserTenantWhereInput>
    NOT?: Enumerable<UserTenantWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    tenantId?: StringFilter | string
    roles?: StringNullableListFilter
    state?: EnumUserStateFilter | UserState
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserTenantOrderByInput = {
    userId?: SortOrder
    tenantId?: SortOrder
    roles?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTenantWhereUniqueInput = {
    userId_tenantId?: UserTenantUserIdTenantIdCompoundUniqueInput
  }

  export type UserTenantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserTenantScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserTenantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserTenantScalarWhereWithAggregatesInput>
    userId?: StringWithAggregatesFilter | string
    tenantId?: StringWithAggregatesFilter | string
    roles?: StringNullableListFilter
    state?: EnumUserStateWithAggregatesFilter | UserState
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    middleName?: string | null
    tenants?: UserTenantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    middleName?: string | null
    tenants?: UserTenantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: UserTenantUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: UserTenantUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    middleName?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    users?: UserTenantCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    users?: UserTenantUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    users?: UserTenantUpdateManyWithoutTenantInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    users?: UserTenantUncheckedUpdateManyWithoutTenantInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type UserTenantCreateInput = {
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreaterolesInput | Enumerable<string>
    user: UserCreateNestedOneWithoutTenantsInput
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserTenantUncheckedCreateInput = {
    userId: string
    tenantId: string
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreaterolesInput | Enumerable<string>
  }

  export type UserTenantUpdateInput = {
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutTenantsInput
    tenant?: TenantUpdateOneRequiredWithoutUsersInput
  }

  export type UserTenantUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
  }

  export type UserTenantCreateManyInput = {
    userId: string
    tenantId: string
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreateManyrolesInput | Enumerable<string>
  }

  export type UserTenantUpdateManyMutationInput = {
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
  }

  export type UserTenantUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserTenantListRelationFilter = {
    every?: UserTenantWhereInput
    some?: UserTenantWhereInput
    none?: UserTenantWhereInput
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type EnumUserStateFilter = {
    equals?: UserState
    in?: Enumerable<UserState>
    notIn?: Enumerable<UserState>
    not?: NestedEnumUserStateFilter | UserState
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserTenantUserIdTenantIdCompoundUniqueInput = {
    userId: string
    tenantId: string
  }

  export type EnumUserStateWithAggregatesFilter = {
    equals?: UserState
    in?: Enumerable<UserState>
    notIn?: Enumerable<UserState>
    not?: NestedEnumUserStateWithAggregatesFilter | UserState
    count?: NestedIntFilter
    min?: NestedEnumUserStateFilter
    max?: NestedEnumUserStateFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type UserTenantCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutUserInput>, Enumerable<UserTenantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutUserInput>
    createMany?: UserTenantCreateManyUserInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
  }

  export type UserTenantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutUserInput>, Enumerable<UserTenantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutUserInput>
    createMany?: UserTenantCreateManyUserInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserTenantUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutUserInput>, Enumerable<UserTenantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserTenantUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserTenantCreateManyUserInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
    set?: Enumerable<UserTenantWhereUniqueInput>
    disconnect?: Enumerable<UserTenantWhereUniqueInput>
    delete?: Enumerable<UserTenantWhereUniqueInput>
    update?: Enumerable<UserTenantUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserTenantUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserTenantScalarWhereInput>
  }

  export type UserTenantUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutUserInput>, Enumerable<UserTenantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserTenantUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserTenantCreateManyUserInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
    set?: Enumerable<UserTenantWhereUniqueInput>
    disconnect?: Enumerable<UserTenantWhereUniqueInput>
    delete?: Enumerable<UserTenantWhereUniqueInput>
    update?: Enumerable<UserTenantUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserTenantUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserTenantScalarWhereInput>
  }

  export type UserTenantCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutTenantInput>, Enumerable<UserTenantUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutTenantInput>
    createMany?: UserTenantCreateManyTenantInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
  }

  export type UserTenantUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutTenantInput>, Enumerable<UserTenantUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutTenantInput>
    createMany?: UserTenantCreateManyTenantInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
  }

  export type UserTenantUpdateManyWithoutTenantInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutTenantInput>, Enumerable<UserTenantUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<UserTenantUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: UserTenantCreateManyTenantInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
    set?: Enumerable<UserTenantWhereUniqueInput>
    disconnect?: Enumerable<UserTenantWhereUniqueInput>
    delete?: Enumerable<UserTenantWhereUniqueInput>
    update?: Enumerable<UserTenantUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<UserTenantUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<UserTenantScalarWhereInput>
  }

  export type UserTenantUncheckedUpdateManyWithoutTenantInput = {
    create?: XOR<Enumerable<UserTenantCreateWithoutTenantInput>, Enumerable<UserTenantUncheckedCreateWithoutTenantInput>>
    connectOrCreate?: Enumerable<UserTenantCreateOrConnectWithoutTenantInput>
    upsert?: Enumerable<UserTenantUpsertWithWhereUniqueWithoutTenantInput>
    createMany?: UserTenantCreateManyTenantInputEnvelope
    connect?: Enumerable<UserTenantWhereUniqueInput>
    set?: Enumerable<UserTenantWhereUniqueInput>
    disconnect?: Enumerable<UserTenantWhereUniqueInput>
    delete?: Enumerable<UserTenantWhereUniqueInput>
    update?: Enumerable<UserTenantUpdateWithWhereUniqueWithoutTenantInput>
    updateMany?: Enumerable<UserTenantUpdateManyWithWhereWithoutTenantInput>
    deleteMany?: Enumerable<UserTenantScalarWhereInput>
  }

  export type UserTenantCreaterolesInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutTenantsInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput
    connect?: UserWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumUserStateFieldUpdateOperationsInput = {
    set?: UserState
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTenantUpdaterolesInput = {
    set?: Enumerable<string>
    push?: string
  }

  export type UserUpdateOneRequiredWithoutTenantsInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput
    upsert?: UserUpsertWithoutTenantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
  }

  export type TenantUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type UserTenantCreateManyrolesInput = {
    set: Enumerable<string>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumUserStateFilter = {
    equals?: UserState
    in?: Enumerable<UserState>
    notIn?: Enumerable<UserState>
    not?: NestedEnumUserStateFilter | UserState
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumUserStateWithAggregatesFilter = {
    equals?: UserState
    in?: Enumerable<UserState>
    notIn?: Enumerable<UserState>
    not?: NestedEnumUserStateWithAggregatesFilter | UserState
    count?: NestedIntFilter
    min?: NestedEnumUserStateFilter
    max?: NestedEnumUserStateFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type UserTenantCreateWithoutUserInput = {
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreaterolesInput | Enumerable<string>
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserTenantUncheckedCreateWithoutUserInput = {
    tenantId: string
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreaterolesInput | Enumerable<string>
  }

  export type UserTenantCreateOrConnectWithoutUserInput = {
    where: UserTenantWhereUniqueInput
    create: XOR<UserTenantCreateWithoutUserInput, UserTenantUncheckedCreateWithoutUserInput>
  }

  export type UserTenantCreateManyUserInputEnvelope = {
    data: Enumerable<UserTenantCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserTenantUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTenantWhereUniqueInput
    update: XOR<UserTenantUpdateWithoutUserInput, UserTenantUncheckedUpdateWithoutUserInput>
    create: XOR<UserTenantCreateWithoutUserInput, UserTenantUncheckedCreateWithoutUserInput>
  }

  export type UserTenantUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTenantWhereUniqueInput
    data: XOR<UserTenantUpdateWithoutUserInput, UserTenantUncheckedUpdateWithoutUserInput>
  }

  export type UserTenantUpdateManyWithWhereWithoutUserInput = {
    where: UserTenantScalarWhereInput
    data: XOR<UserTenantUpdateManyMutationInput, UserTenantUncheckedUpdateManyWithoutTenantsInput>
  }

  export type UserTenantScalarWhereInput = {
    AND?: Enumerable<UserTenantScalarWhereInput>
    OR?: Enumerable<UserTenantScalarWhereInput>
    NOT?: Enumerable<UserTenantScalarWhereInput>
    userId?: StringFilter | string
    tenantId?: StringFilter | string
    roles?: StringNullableListFilter
    state?: EnumUserStateFilter | UserState
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserTenantCreateWithoutTenantInput = {
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreaterolesInput | Enumerable<string>
    user: UserCreateNestedOneWithoutTenantsInput
  }

  export type UserTenantUncheckedCreateWithoutTenantInput = {
    userId: string
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreaterolesInput | Enumerable<string>
  }

  export type UserTenantCreateOrConnectWithoutTenantInput = {
    where: UserTenantWhereUniqueInput
    create: XOR<UserTenantCreateWithoutTenantInput, UserTenantUncheckedCreateWithoutTenantInput>
  }

  export type UserTenantCreateManyTenantInputEnvelope = {
    data: Enumerable<UserTenantCreateManyTenantInput>
    skipDuplicates?: boolean
  }

  export type UserTenantUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserTenantWhereUniqueInput
    update: XOR<UserTenantUpdateWithoutTenantInput, UserTenantUncheckedUpdateWithoutTenantInput>
    create: XOR<UserTenantCreateWithoutTenantInput, UserTenantUncheckedCreateWithoutTenantInput>
  }

  export type UserTenantUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserTenantWhereUniqueInput
    data: XOR<UserTenantUpdateWithoutTenantInput, UserTenantUncheckedUpdateWithoutTenantInput>
  }

  export type UserTenantUpdateManyWithWhereWithoutTenantInput = {
    where: UserTenantScalarWhereInput
    data: XOR<UserTenantUpdateManyMutationInput, UserTenantUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserCreateWithoutTenantsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    middleName?: string | null
  }

  export type UserUncheckedCreateWithoutTenantsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    middleName?: string | null
  }

  export type UserCreateOrConnectWithoutTenantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutTenantsInput = {
    update: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
  }

  export type UserUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type UserTenantCreateManyUserInput = {
    tenantId: string
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreateManyrolesInput | Enumerable<string>
  }

  export type UserTenantUpdateWithoutUserInput = {
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
    tenant?: TenantUpdateOneRequiredWithoutUsersInput
  }

  export type UserTenantUncheckedUpdateWithoutUserInput = {
    tenantId?: StringFieldUpdateOperationsInput | string
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
  }

  export type UserTenantUncheckedUpdateManyWithoutTenantsInput = {
    tenantId?: StringFieldUpdateOperationsInput | string
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
  }

  export type UserTenantCreateManyTenantInput = {
    userId: string
    state: UserState
    createdAt?: Date | string
    roles?: UserTenantCreateManyrolesInput | Enumerable<string>
  }

  export type UserTenantUpdateWithoutTenantInput = {
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
    user?: UserUpdateOneRequiredWithoutTenantsInput
  }

  export type UserTenantUncheckedUpdateWithoutTenantInput = {
    userId?: StringFieldUpdateOperationsInput | string
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
  }

  export type UserTenantUncheckedUpdateManyWithoutUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    state?: EnumUserStateFieldUpdateOperationsInput | UserState
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserTenantUpdaterolesInput | Enumerable<string>
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
  export const dmmf: runtime.DMMF.Document;
}