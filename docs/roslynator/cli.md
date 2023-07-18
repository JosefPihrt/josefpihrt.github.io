---
sidebar_position: 2
sidebar_label: Roslynator CLI
---

# Roslynator Command Line Tool

## Commands

* [analyze](cli/commands/analyze.md)
* [fix](cli/commands/fix.md)
* [format](cli/commands/format.md)
* [generate-doc](cli/commands/generate-doc.md)
* [generate-doc-root](cli/commands/generate-doc-root.md)
* [list-symbols](cli/commands/list-symbols.md)
* [loc](cli/commands/loc.md)
* [lloc](cli/commands/lloc.md)
* [rename-symbol](cli/commands/rename-symbol.md)
* [spellcheck](cli/commands/spellcheck.md)

## Packages

### [Roslynator.DotNet.Cli](https://nuget.org/packages/Roslynator.DotNet.Cli)

* [.NET Core global tool](https://docs.microsoft.com/dotnet/core/tools/global-tools)
  * cross-platform
  * can be run directly from command line
* It is recommended to use this tool.
* Version `0.2.0` or higher requires .NET Core SDK 5.0

Run following command to install it:

```
dotnet tool install -g roslynator.dotnet.cli
```

### [Roslynator.CommandLine](https://nuget.org/packages/Roslynator.CommandLine)

* Stand-alone application that requires .NET Framework (Windows only).
* It can be used for .NET Framework projects (old style `csproj`).
* [Download package](https://www.nuget.org/api/v2/package/Roslynator.CommandLine/0.2.0) and run `Roslynator.exe`.

## Exit Code

Value | Comment
--- | ---
0 | Success\*
1 | Not a success\*\*
2 | Error occurred or execution canceled

\* No diagnostic was found (`analyze` command ) or all diagnostics were fixed (`fix` command) etc.

\*\* A diagnostic was found (`analyze` command) or not all diagnostics were fixed (`fix` command) etc.

## Which MSBuild Instance to Use

If you are using version `0.1.5` or lower it may be necessary to specify MSBuild instance  - a directory where MSBuild binaries are located.

### Roslynator.CommandLine

You should specify MSBuild instance that is part of Visual Studio installation. It should be similar to `C:/Program Files/Microsoft Visual Studio/2019/Community/MSBuild/Current/Bin`

### Roslynator.DotNet.Cli

You should specify MSBuild instance that is part of .NET Core SDK installation. It should be similar to `C:/Program Files/dotnet/sdk/3.1.200`