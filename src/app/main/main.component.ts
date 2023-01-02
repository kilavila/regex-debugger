import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  regularExpression: string = '';
  testString: string = '';
  substitution: string = '';
  result: string = '';
  copied: boolean = false;

  flags: Array<Flag> = [
    {
      title: `Global`,
      description: `Don't return after first match`,
      value: `g`,
    },
    {
      title: `Multi line`,
      description: `^ and $ match start/end of line`,
      value: `m`,
    },
    {
      title: `Insensitive`,
      description: `Case insensitive match`,
      value: `i`,
    },
    {
      title: `Extended`,
      description: `Ignore whitespace`,
      value: `x`,
    },
    {
      title: `Single line`,
      description: `Dot matches newline`,
      value: `s`,
    },
    {
      title: `Unicode`,
      description: `Match with full unicode`,
      value: `u`,
    },
    {
      title: `Ungreedy`,
      description: `Make quantifiers lazy`,
      value: `U`,
    },
    {
      title: `Anchored`,
      description: `Anchor to start of pattern, or at the end of the most recent match`,
      value: `A`,
    },
    {
      title: `Jchanged`,
      description: `Allow duplicate subpattern names`,
      value: `J`,
    },
    {
      title: `Dollar end only`,
      description: `$ matches only end of pattern`,
      value: `D`,
    },
  ];

  flagsMenu: boolean = false;
  selectedFlags: string = 'gm';
  matches: RegExpMatchArray | null = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleFlag(flag: string): void {
    this.selectedFlags.includes(flag)
      ? this.selectedFlags = this.selectedFlags.replace(flag, '')
      : this.selectedFlags = this.selectedFlags + flag;

    this.find(this.regularExpression, this.testString);
    this.replace(this.regularExpression, this.testString, this.substitution);
  }

  find(regEx: string, testString: string): void {
    const newRegExp = new RegExp(regEx, this.selectedFlags);

    this.matches = testString.match(newRegExp);
    console.log(this.matches);
  }

  replace(regEx: string, testString: string, sub: string): void {
    const newRegExp = new RegExp(regEx, this.selectedFlags);

    this.result = testString.replace(newRegExp, sub);
  }

  copy(): void {
    navigator.clipboard.writeText(this.result);

    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000);
  }

}

interface Flag {
  title: string;
  description: string;
  value: string;
}
