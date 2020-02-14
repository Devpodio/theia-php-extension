/**
 * Generated using theia-extension-generator
 */

import { PHPClientContribution } from './theia-php-contribution';
import { LanguageClientContribution } from "@devpodio/languages/lib/browser";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here

    bind(PHPClientContribution).toSelf().inSingletonScope();
    bind(LanguageClientContribution).toDynamicValue(ctx => ctx.container.get(PHPClientContribution));
});
