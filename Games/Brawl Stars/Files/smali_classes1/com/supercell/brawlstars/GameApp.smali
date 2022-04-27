.class public Lcom/supercell/brawlstars/GameApp;
.super Lcom/supercell/titan/GameApp;
.source "GameApp.java"

# interfaces
.implements Lcom/supercell/titan/ActivityRunner;


# direct methods
.method public constructor <init>()V
    .registers 1

    .line 1
    invoke-direct {p0}, Lcom/supercell/titan/GameApp;-><init>()V

    return-void
.end method


# virtual methods
.method public onActivityResult(IILandroid/content/Intent;)V
    .registers 4

    .line 1
    invoke-super {p0, p1, p2, p3}, Lcom/supercell/titan/GameApp;->onActivityResult(IILandroid/content/Intent;)V

    .line 2
    invoke-static {p1, p2, p3}, Lcom/linecorp/nova/android/NovaNative;->onActivityResult(IILandroid/content/Intent;)V

    return-void
.end method

.method public onCreate(Landroid/os/Bundle;)V
    .registers 6

    .line 1
    invoke-super {p0, p1}, Lcom/supercell/titan/GameApp;->onCreate(Landroid/os/Bundle;)V

    const/4 p1, 0x2

    new-array v0, p1, [Ljava/lang/Object;

    const/4 v1, 0x0

    aput-object p0, v0, v1

    const/4 v2, 0x1

    aput-object p0, v0, v2

    new-array p1, p1, [Ljava/lang/Class;

    .line 2
    const-class v3, Landroid/app/Activity;

    aput-object v3, p1, v1

    const-class v1, Lcom/supercell/titan/ActivityRunner;

    aput-object v1, p1, v2

    const-string v1, "com.supercell.titan.Kakao"

    const-string v2, "setActivityAndRunner"

    invoke-static {v1, v2, v0, p1}, Lcom/supercell/titan/ReflectionUtils;->callStaticMethod(Ljava/lang/String;Ljava/lang/String;[Ljava/lang/Object;[Ljava/lang/Class;)Ljava/lang/Object;

    .line 3
    invoke-static {p0}, Lcom/linecorp/nova/android/NovaNative;->setActivity(Landroid/app/Activity;)V

    return-void
.end method

.method public onPause()V
    .registers 1

    .line 1
    invoke-super {p0}, Lcom/supercell/titan/GameApp;->onPause()V

    .line 2
    invoke-static {}, Lcom/linecorp/nova/android/NovaNative;->onPause()V

    return-void
.end method

.method public onResume()V
    .registers 1

    .line 1
    invoke-super {p0}, Lcom/supercell/titan/GameApp;->onResume()V

    .line 2
    invoke-static {}, Lcom/linecorp/nova/android/NovaNative;->onResume()V

    return-void
.end method
