provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "event_platform_rg" {
  name     = "event-platform-rg"
  location = "West Europe"
}

resource "azurerm_cosmosdb_account" "event_platform_cosmosdb" {
  name                = "event-platform-db"
  resource_group_name = azurerm_resource_group.event_platform_rg.name
  location            = azurerm_resource_group.event_platform_rg.location
  offer_type          = "Standard"
  kind                = "MongoDB"

  consistency_policy {
    consistency_level       = "Session"
  }
}

resource "azurerm_storage_account" "event_platform_storage" {
  name                     = "eventplatformstorage"
  resource_group_name      = azurerm_resource_group.event_platform_rg.name
  location                 = azurerm_resource_group.event_platform_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}
