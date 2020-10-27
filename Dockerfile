FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src/PortfolioSiteAPI/
COPY ["PortfolioSiteAPI.csproj", "/src/PortfolioSiteAPI/"]
RUN dotnet restore "PortfolioSiteAPI.csproj"
COPY . .
WORKDIR "/src/PortfolioSiteAPI/"
RUN dotnet build "PortfolioSiteAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PortfolioSiteAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PortfolioSiteAPI.dll"]
