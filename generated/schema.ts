// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Fund extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Fund entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Fund must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Fund", id.toString(), this);
    }
  }

  static load(id: string): Fund | null {
    return changetype<Fund | null>(store.get("Fund", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get manager(): string {
    let value = this.get("manager");
    return value!.toString();
  }

  set manager(value: string) {
    this.set("manager", Value.fromString(value));
  }

  get creation_timestamp(): BigInt {
    let value = this.get("creation_timestamp");
    return value!.toBigInt();
  }

  set creation_timestamp(value: BigInt) {
    this.set("creation_timestamp", Value.fromBigInt(value));
  }

  get closed_timestamp(): BigInt | null {
    let value = this.get("closed_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set closed_timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("closed_timestamp");
    } else {
      this.set("closed_timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get subscriptions(): Array<string> {
    let value = this.get("subscriptions");
    return value!.toStringArray();
  }

  set subscriptions(value: Array<string>) {
    this.set("subscriptions", Value.fromStringArray(value));
  }

  get total_collateral_raised(): BigInt {
    let value = this.get("total_collateral_raised");
    return value!.toBigInt();
  }

  set total_collateral_raised(value: BigInt) {
    this.set("total_collateral_raised", Value.fromBigInt(value));
  }

  get manager_fee_percentage(): BigInt {
    let value = this.get("manager_fee_percentage");
    return value!.toBigInt();
  }

  set manager_fee_percentage(value: BigInt) {
    this.set("manager_fee_percentage", Value.fromBigInt(value));
  }

  get subscription_constraints(): string {
    let value = this.get("subscription_constraints");
    return value!.toString();
  }

  set subscription_constraints(value: string) {
    this.set("subscription_constraints", Value.fromString(value));
  }

  get rules(): Array<string> {
    let value = this.get("rules");
    return value!.toStringArray();
  }

  set rules(value: Array<string>) {
    this.set("rules", Value.fromStringArray(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value!.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Position entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Position must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Position", id.toString(), this);
    }
  }

  static load(id: string): Position | null {
    return changetype<Position | null>(store.get("Position", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get next_actions(): Array<Bytes> {
    let value = this.get("next_actions");
    return value!.toBytesArray();
  }

  set next_actions(value: Array<Bytes>) {
    this.set("next_actions", Value.fromBytesArray(value));
  }

  get fund(): string {
    let value = this.get("fund");
    return value!.toString();
  }

  set fund(value: string) {
    this.set("fund", Value.fromString(value));
  }

  get creation_timestamp(): BigInt {
    let value = this.get("creation_timestamp");
    return value!.toBigInt();
  }

  set creation_timestamp(value: BigInt) {
    this.set("creation_timestamp", Value.fromBigInt(value));
  }

  get closed_timestamp(): BigInt | null {
    let value = this.get("closed_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set closed_timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("closed_timestamp");
    } else {
      this.set("closed_timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class SubConstraints extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SubConstraints entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SubConstraints must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SubConstraints", id.toString(), this);
    }
  }

  static load(id: string): SubConstraints | null {
    return changetype<SubConstraints | null>(store.get("SubConstraints", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get minCollateralPerSub(): BigInt {
    let value = this.get("minCollateralPerSub");
    return value!.toBigInt();
  }

  set minCollateralPerSub(value: BigInt) {
    this.set("minCollateralPerSub", Value.fromBigInt(value));
  }

  get maxCollateralPerSub(): BigInt {
    let value = this.get("maxCollateralPerSub");
    return value!.toBigInt();
  }

  set maxCollateralPerSub(value: BigInt) {
    this.set("maxCollateralPerSub", Value.fromBigInt(value));
  }

  get minCollateralTotal(): BigInt {
    let value = this.get("minCollateralTotal");
    return value!.toBigInt();
  }

  set minCollateralTotal(value: BigInt) {
    this.set("minCollateralTotal", Value.fromBigInt(value));
  }

  get maxCollateralTotal(): BigInt {
    let value = this.get("maxCollateralTotal");
    return value!.toBigInt();
  }

  set maxCollateralTotal(value: BigInt) {
    this.set("maxCollateralTotal", Value.fromBigInt(value));
  }

  get deadline(): BigInt {
    let value = this.get("deadline");
    return value!.toBigInt();
  }

  set deadline(value: BigInt) {
    this.set("deadline", Value.fromBigInt(value));
  }

  get lockin(): BigInt {
    let value = this.get("lockin");
    return value!.toBigInt();
  }

  set lockin(value: BigInt) {
    this.set("lockin", Value.fromBigInt(value));
  }

  get fund(): string {
    let value = this.get("fund");
    return value!.toString();
  }

  set fund(value: string) {
    this.set("fund", Value.fromString(value));
  }
}

export class Sub extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Sub entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Sub must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Sub", id.toString(), this);
    }
  }

  static load(id: string): Sub | null {
    return changetype<Sub | null>(store.get("Sub", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get fund(): string {
    let value = this.get("fund");
    return value!.toString();
  }

  set fund(value: string) {
    this.set("fund", Value.fromString(value));
  }

  get deposit_timestamps(): Array<BigInt> {
    let value = this.get("deposit_timestamps");
    return value!.toBigIntArray();
  }

  set deposit_timestamps(value: Array<BigInt>) {
    this.set("deposit_timestamps", Value.fromBigIntArray(value));
  }

  get deposit_amounts(): Array<BigInt> {
    let value = this.get("deposit_amounts");
    return value!.toBigIntArray();
  }

  set deposit_amounts(value: Array<BigInt>) {
    this.set("deposit_amounts", Value.fromBigIntArray(value));
  }

  get withdraw_timestamps(): Array<BigInt> {
    let value = this.get("withdraw_timestamps");
    return value!.toBigIntArray();
  }

  set withdraw_timestamps(value: Array<BigInt>) {
    this.set("withdraw_timestamps", Value.fromBigIntArray(value));
  }
}

export class Rule extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rule entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rule must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rule", id.toString(), this);
    }
  }

  static load(id: string): Rule | null {
    return changetype<Rule | null>(store.get("Rule", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creation_timestamp(): BigInt {
    let value = this.get("creation_timestamp");
    return value!.toBigInt();
  }

  set creation_timestamp(value: BigInt) {
    this.set("creation_timestamp", Value.fromBigInt(value));
  }

  get activation_timestamps(): Array<BigInt> {
    let value = this.get("activation_timestamps");
    return value!.toBigIntArray();
  }

  set activation_timestamps(value: Array<BigInt>) {
    this.set("activation_timestamps", Value.fromBigIntArray(value));
  }

  get deactivation_timestamps(): Array<BigInt> {
    let value = this.get("deactivation_timestamps");
    return value!.toBigIntArray();
  }

  set deactivation_timestamps(value: Array<BigInt>) {
    this.set("deactivation_timestamps", Value.fromBigIntArray(value));
  }

  get execution_timestamp(): BigInt | null {
    let value = this.get("execution_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set execution_timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("execution_timestamp");
    } else {
      this.set("execution_timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get redemption_timestamp(): BigInt | null {
    let value = this.get("redemption_timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set redemption_timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("redemption_timestamp");
    } else {
      this.set("redemption_timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get actions(): Array<string> {
    let value = this.get("actions");
    return value!.toStringArray();
  }

  set actions(value: Array<string>) {
    this.set("actions", Value.fromStringArray(value));
  }

  get triggers(): Array<string> {
    let value = this.get("triggers");
    return value!.toStringArray();
  }

  set triggers(value: Array<string>) {
    this.set("triggers", Value.fromStringArray(value));
  }

  get outputs(): Array<BigInt> {
    let value = this.get("outputs");
    return value!.toBigIntArray();
  }

  set outputs(value: Array<BigInt>) {
    this.set("outputs", Value.fromBigIntArray(value));
  }

  get collaterals(): Array<BigInt> | null {
    let value = this.get("collaterals");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set collaterals(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("collaterals");
    } else {
      this.set("collaterals", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get fund(): string {
    let value = this.get("fund");
    return value!.toString();
  }

  set fund(value: string) {
    this.set("fund", Value.fromString(value));
  }
}

export class Action extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Action entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Action must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Action", id.toString(), this);
    }
  }

  static load(id: string): Action | null {
    return changetype<Action | null>(store.get("Action", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get callee(): Bytes {
    let value = this.get("callee");
    return value!.toBytes();
  }

  set callee(value: Bytes) {
    this.set("callee", Value.fromBytes(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value!.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }

  get input_tokens(): Array<string> {
    let value = this.get("input_tokens");
    return value!.toStringArray();
  }

  set input_tokens(value: Array<string>) {
    this.set("input_tokens", Value.fromStringArray(value));
  }

  get output_tokens(): Array<string> {
    let value = this.get("output_tokens");
    return value!.toStringArray();
  }

  set output_tokens(value: Array<string>) {
    this.set("output_tokens", Value.fromStringArray(value));
  }

  get rule(): string {
    let value = this.get("rule");
    return value!.toString();
  }

  set rule(value: string) {
    this.set("rule", Value.fromString(value));
  }
}

export class Trigger extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Trigger entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Trigger must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Trigger", id.toString(), this);
    }
  }

  static load(id: string): Trigger | null {
    return changetype<Trigger | null>(store.get("Trigger", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): BigInt {
    let value = this.get("type");
    return value!.toBigInt();
  }

  set type(value: BigInt) {
    this.set("type", Value.fromBigInt(value));
  }

  get callee(): Bytes {
    let value = this.get("callee");
    return value!.toBytes();
  }

  set callee(value: Bytes) {
    this.set("callee", Value.fromBytes(value));
  }

  get create_time_params(): Bytes {
    let value = this.get("create_time_params");
    return value!.toBytes();
  }

  set create_time_params(value: Bytes) {
    this.set("create_time_params", Value.fromBytes(value));
  }

  get rule(): string {
    let value = this.get("rule");
    return value!.toString();
  }

  set rule(value: string) {
    this.set("rule", Value.fromString(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get type(): BigInt {
    let value = this.get("type");
    return value!.toBigInt();
  }

  set type(value: BigInt) {
    this.set("type", Value.fromBigInt(value));
  }

  get nft_id(): BigInt | null {
    let value = this.get("nft_id");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nft_id(value: BigInt | null) {
    if (!value) {
      this.unset("nft_id");
    } else {
      this.set("nft_id", Value.fromBigInt(<BigInt>value));
    }
  }

  get input_of(): Array<string> {
    let value = this.get("input_of");
    return value!.toStringArray();
  }

  set input_of(value: Array<string>) {
    this.set("input_of", Value.fromStringArray(value));
  }

  get output_of(): Array<string> {
    let value = this.get("output_of");
    return value!.toStringArray();
  }

  set output_of(value: Array<string>) {
    this.set("output_of", Value.fromStringArray(value));
  }
}

export class Manager extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Manager entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Manager must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Manager", id.toString(), this);
    }
  }

  static load(id: string): Manager | null {
    return changetype<Manager | null>(store.get("Manager", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get socialHandle(): string | null {
    let value = this.get("socialHandle");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set socialHandle(value: string | null) {
    if (!value) {
      this.unset("socialHandle");
    } else {
      this.set("socialHandle", Value.fromString(<string>value));
    }
  }

  get chatroomInvite(): string | null {
    let value = this.get("chatroomInvite");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set chatroomInvite(value: string | null) {
    if (!value) {
      this.unset("chatroomInvite");
    } else {
      this.set("chatroomInvite", Value.fromString(<string>value));
    }
  }

  get customLink(): string | null {
    let value = this.get("customLink");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set customLink(value: string | null) {
    if (!value) {
      this.unset("customLink");
    } else {
      this.set("customLink", Value.fromString(<string>value));
    }
  }

  get aboutText(): string | null {
    let value = this.get("aboutText");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set aboutText(value: string | null) {
    if (!value) {
      this.unset("aboutText");
    } else {
      this.set("aboutText", Value.fromString(<string>value));
    }
  }

  get strategyText(): string | null {
    let value = this.get("strategyText");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set strategyText(value: string | null) {
    if (!value) {
      this.unset("strategyText");
    } else {
      this.set("strategyText", Value.fromString(<string>value));
    }
  }

  get funds(): Array<string> {
    let value = this.get("funds");
    return value!.toStringArray();
  }

  set funds(value: Array<string>) {
    this.set("funds", Value.fromStringArray(value));
  }
}
