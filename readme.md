# fileSize 

Simple library to convert an integer to an Intl-compatible file size object.

## Install

```shell
npm install @contexis/filesize --save
```


## Usage

Basically, the function takes one required and one optional argument:

```typescript
/*
* @param {number} size - filesize in bytes
* @param {boolean} [physical] - use 1000 as a base (like MacOS)
*
* @return {Object} containing the size as float and a unit as string
*/
fileSize(size, physical = false)
```


### Vanilla Javascript

You can simply import the function into any javascript project and convert any number to a number formatter:

```javascript
import fileSize from '@contexis/filesize'

const size = fileSize(125745000)
// size = {value: 125.74499999', unit: 'megabyte'}

const sizePhysical = fileSize(125745000, true)
// size = {value: 119.9197769', unit: 'megabyte'}

const fileSizeString = new Intl.NumberFormat(
	'en-US',
	{style: 'unit', unit: size.unit }).format(size.value);

console.log(fileSizeString);
// 125.74 Mb
```

### TypeScript

Types can be imported:
```typescript
import fileSize, { FileSize } from '@contexis/filesize'

const size: FileSize = fileSize(125745000)
```