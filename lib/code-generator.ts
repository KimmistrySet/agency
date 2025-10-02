// Code Generator Engine for BluePrinter
import { FigmaNode } from './figma-api';

export interface GeneratedCode {
  react: string;
  html: string;
  css: string;
  tailwind: string;
}

export class CodeGenerator {
  generateCode(node: FigmaNode): GeneratedCode {
    return {
      react: this.generateReact(node),
      html: this.generateHTML(node),
      css: this.generateCSS(node),
      tailwind: this.generateTailwind(node),
    };
  }

  private generateReact(node: FigmaNode): string {
    if (node.type === 'TEXT') {
      return this.generateTextComponent(node);
    }
    
    if (node.type === 'RECTANGLE' || node.type === 'FRAME') {
      return this.generateContainerComponent(node);
    }

    return this.generateGenericComponent(node);
  }

  private generateHTML(node: FigmaNode): string {
    if (node.type === 'TEXT') {
      const text = node.characters || '';
      const styles = this.getInlineStyles(node);
      return `<p style="${styles}">${text}</p>`;
    }

    if (node.type === 'RECTANGLE' || node.type === 'FRAME') {
      const styles = this.getInlineStyles(node);
      const children = node.children?.map(child => this.generateHTML(child)).join('\n') || '';
      return `<div style="${styles}">\n${children}\n</div>`;
    }

    return `<div>${node.name}</div>`;
  }

  private generateCSS(node: FigmaNode): string {
    const className = this.toKebabCase(node.name);
    const styles = this.getCSSProperties(node);
    
    return `.${className} {\n${styles}\n}`;
  }

  private generateTailwind(node: FigmaNode): string {
    const classes = this.getTailwindClasses(node);
    
    if (node.type === 'TEXT') {
      const text = node.characters || '';
      return `<p class="${classes}">${text}</p>`;
    }

    return `<div class="${classes}">${node.name}</div>`;
  }

  private generateTextComponent(node: FigmaNode): string {
    const text = node.characters || '';
    const styles = this.getTailwindClasses(node);
    
    return `const TextComponent = () => {
  return (
    <p className="${styles}">
      ${text}
    </p>
  );
};

export default TextComponent;`;
  }

  private generateContainerComponent(node: FigmaNode): string {
    const componentName = this.toPascalCase(node.name);
    const styles = this.getTailwindClasses(node);
    const children = node.children?.map(child => this.generateReact(child)).join('\n') || '';
    
    return `const ${componentName} = () => {
  return (
    <div className="${styles}">
      ${children}
    </div>
  );
};

export default ${componentName};`;
  }

  private generateGenericComponent(node: FigmaNode): string {
    const componentName = this.toPascalCase(node.name);
    const styles = this.getTailwindClasses(node);
    
    return `const ${componentName} = () => {
  return (
    <div className="${styles}">
      {/* ${node.name} */}
    </div>
  );
};

export default ${componentName};`;
  }

  private getInlineStyles(node: FigmaNode): string {
    const styles: string[] = [];
    
    if (node.absoluteBoundingBox) {
      const { width, height } = node.absoluteBoundingBox;
      styles.push(`width: ${width}px`);
      styles.push(`height: ${height}px`);
    }

    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID' && fill.color) {
        const { r, g, b, a } = fill.color;
        const color = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
        styles.push(`background-color: ${color}`);
      }
    }

    if (node.style) {
      if (node.style.fontFamily) {
        styles.push(`font-family: ${node.style.fontFamily}`);
      }
      if (node.style.fontSize) {
        styles.push(`font-size: ${node.style.fontSize}px`);
      }
      if (node.style.fontWeight) {
        styles.push(`font-weight: ${node.style.fontWeight}`);
      }
    }

    return styles.join('; ');
  }

  private getCSSProperties(node: FigmaNode): string {
    const properties: string[] = [];
    
    if (node.absoluteBoundingBox) {
      const { width, height } = node.absoluteBoundingBox;
      properties.push(`  width: ${width}px;`);
      properties.push(`  height: ${height}px;`);
    }

    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID' && fill.color) {
        const { r, g, b, a } = fill.color;
        const color = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
        properties.push(`  background-color: ${color};`);
      }
    }

    return properties.join('\n');
  }

  private getTailwindClasses(node: FigmaNode): string {
    const classes: string[] = [];
    
    if (node.absoluteBoundingBox) {
      const { width, height } = node.absoluteBoundingBox;
      classes.push(`w-[${width}px]`);
      classes.push(`h-[${height}px]`);
    }

    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID' && fill.color) {
        const { r, g, b } = fill.color;
        const color = `bg-[rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})]`;
        classes.push(color);
      }
    }

    if (node.style) {
      if (node.style.fontSize) {
        classes.push(`text-[${node.style.fontSize}px]`);
      }
      if (node.style.fontWeight) {
        const weight = this.mapFontWeight(node.style.fontWeight);
        classes.push(weight);
      }
    }

    return classes.join(' ');
  }

  private toPascalCase(str: string): string {
    return str
      .replace(/[^a-zA-Z0-9]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  private toKebabCase(str: string): string {
    return str
      .replace(/[^a-zA-Z0-9]/g, '-')
      .toLowerCase()
      .replace(/^-+|-+$/g, '');
  }

  private mapFontWeight(weight: number): string {
    if (weight <= 300) return 'font-light';
    if (weight <= 400) return 'font-normal';
    if (weight <= 500) return 'font-medium';
    if (weight <= 600) return 'font-semibold';
    if (weight <= 700) return 'font-bold';
    return 'font-extrabold';
  }
}
