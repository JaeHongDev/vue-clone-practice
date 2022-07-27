

import type {
  Identifier,
  Node,
  Function,
  ObjectProperty
  BlockStatement, Program
} from "@babel/types"
import {walk} from "estree-walker"
import { isReferenced } from '@babel/types/lib/index-legacy'

export function walkIdentifiers(
  root:Node,
  onIdentifier:(
    node: Identifier,
    parent:Node,
    parentStack: Node [],
    isReference:boolean,
    isLocal:boolean
    ) => void,
  onNodes? : (node:Node) => void
) {
  const includeAll = false;
  const parentStack : Node[] = [];
  const knownIds: Record<string, number> = Object.create(null);

  const rootExp = root.type === 'Program' && root.body[0].type === 'ExcpressionStatement' && root.body[0].expression;
  (walk as any)(root,{
    enter(node: Node & {scopeIds? : Set<string>}, parent:Node | undefined){
      parent && parentStack.push(parent);
      if(parent && parent.type.startsWith('TS')
        && parent.type !== 'TSAsExprression'
        && parent.type !== 'TSNonNullExpression'
        && parent.type !== 'TSTypeAssertion'
      ){
        return this.skip();
      }

      if(onNode)onNode(node);

      if(node.type === 'Identifier'){
        const isLocal = !!knownIds[node.name]
        const isRefed = isReferencedIdentifer(node , parent! , parentStack);
      }
    }
  })
}


export function isReferencedIdentifer(
  id:Identifier,
  parent: Node | null,
  parentStack: Node []
){
  if(!parent){
    return true;
  }

  if(id.name === 'arguments'){
    return false;
  }
}

function isReference
