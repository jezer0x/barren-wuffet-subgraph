// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class Fund extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Fund", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("Fund", [address.toHex()], context);
  }
}

export class RoboCop extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("RoboCop", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("RoboCop", [address.toHex()], context);
  }
}
